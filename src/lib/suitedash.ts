/**
 * SuiteDash form configuration.
 *
 * The form on /contact is Mike's SuiteDash "Let's talk" form, embedded so every
 * completed submission lands in SuiteDash and can trigger an automation there.
 * That replaces the nodemailer path in /api/contact, which needed SMTP
 * credentials to be set in Hostinger before it would do anything.
 *
 * IMPORTANT — the embed URL is not the admin URL.
 * https://secure.mbeasleyllc.com/frm/<id> is the INTERNAL path: it 302s to
 * /site/login and the login page sends `X-Frame-Options: DENY`, so it cannot be
 * framed on a public page. The public URL comes from SuiteDash itself:
 *
 *   SuiteDash → Forms → "Let's talk" → Options → Link / Embed → Embed Code
 *
 * Paste the src from that embed code below. It is typically of the form
 * https://secure.mbeasleyllc.com/form/<public-token> (the public form endpoint,
 * not /frm/). While it is null the contact page falls back to the on-site form
 * rather than rendering a broken iframe — see SuiteDashForm.tsx.
 */

/** Public embed URL from SuiteDash → Forms → Link / Embed → Embed Code. */
export const SUITEDASH_FORM_URL: string | null = null;

/**
 * The admin link, used only for the "open in a new tab" fallback so a visitor
 * is never stuck if framing is blocked or SuiteDash is slow.
 */
export const SUITEDASH_FALLBACK_URL =
  "https://secure.mbeasleyllc.com/frm/21SNLBNW3uzVkf";

/** SuiteDash forms render tall; this is the initial iframe height in px. */
export const SUITEDASH_FORM_HEIGHT = 900;

/** True once a public embed URL has been configured. */
export const hasSuiteDashForm = Boolean(SUITEDASH_FORM_URL);
