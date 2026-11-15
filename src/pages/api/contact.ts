import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Payload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  /** Honeypot: real users never see this field. */
  website?: string;
};

const LIMITS = {
  name: 100,
  email: 254,
  phone: 40,
  company: 150,
  service: 60,
  message: 5000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Strip CR/LF so user input can never inject extra mail headers. */
const headerSafe = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string,
  );

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

// Crude per-IP throttle. The app runs as a single process on Hostinger, so an
// in-memory map is adequate; it resets whenever the app restarts.
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isThrottled(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = (req.body ?? {}) as Payload;

  // Honeypot: answer 200 so bots don't learn anything and don't retry.
  if (clean(body.website, 200)) {
    return res.status(200).json({ ok: true });
  }

  const ip =
    (req.headers["x-forwarded-for"] as string | undefined)?.split(",")[0]?.trim() ||
    req.socket.remoteAddress ||
    "unknown";

  if (isThrottled(ip)) {
    return res
      .status(429)
      .json({ error: "Too many messages from this address. Please try again later." });
  }

  const firstName = clean(body.firstName, LIMITS.name);
  const lastName = clean(body.lastName, LIMITS.name);
  const email = clean(body.email, LIMITS.email);
  const phone = clean(body.phone, LIMITS.phone);
  const company = clean(body.company, LIMITS.company);
  const service = clean(body.service, LIMITS.service);
  const message = clean(body.message, LIMITS.message);

  const fields: string[] = [];
  if (!firstName) fields.push("firstName");
  if (!lastName) fields.push("lastName");
  if (!message) fields.push("message");
  if (!email || !EMAIL_RE.test(email)) fields.push("email");

  if (fields.length) {
    return res.status(400).json({ error: "Please check the highlighted fields.", fields });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  const to = process.env.CONTACT_TO_EMAIL || "mike@mbeasleyllc.com";
  const port = Number(SMTP_PORT || 465);

  // Without a mailbox this form cannot deliver anything, and pretending
  // otherwise would silently lose enquiries.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error(
      "[contact] SMTP not configured; submission NOT delivered. Set SMTP_HOST, SMTP_USER and SMTP_PASS.",
      { from: email, service },
    );
    return res.status(503).json({
      error: `This form isn't connected to a mailbox yet. Please email ${to} directly.`,
      fallbackEmail: to,
    });
  }

  const fullName = `${firstName} ${lastName}`.trim();
  const lines = [
    `Name:    ${fullName}`,
    `Email:   ${email}`,
    phone ? `Phone:   ${phone}` : null,
    company ? `Company: ${company}` : null,
    service ? `Service: ${service}` : null,
    "",
    message,
  ].filter((l): l is string => l !== null);

  try {
    const transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transport.sendMail({
      from: `"Website enquiry" <${SMTP_USER}>`,
      to,
      // Email is regex-validated (no whitespace) and the name is CRLF-stripped,
      // so neither can inject headers.
      replyTo: `"${headerSafe(fullName)}" <${email}>`,
      subject: `Website enquiry${service ? `: ${service}` : ""} from ${headerSafe(fullName)}`,
      text: lines.join("\n"),
      html: `<h2>Website enquiry</h2>
<p><strong>Name:</strong> ${escapeHtml(fullName)}<br>
<strong>Email:</strong> ${escapeHtml(email)}${phone ? `<br><strong>Phone:</strong> ${escapeHtml(phone)}` : ""}${
        company ? `<br><strong>Company:</strong> ${escapeHtml(company)}` : ""
      }${service ? `<br><strong>Service:</strong> ${escapeHtml(service)}` : ""}</p>
<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return res.status(502).json({
      error: `We couldn't send your message. Please email ${to} directly.`,
      fallbackEmail: to,
    });
  }
}
