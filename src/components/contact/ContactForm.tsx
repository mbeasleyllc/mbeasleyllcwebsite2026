import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fallbackEmail, setFallbackEmail] = useState("");
  const [service, setService] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");
    setFallbackEmail("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, service }),
      });
      const body = (await res.json().catch(() => ({}))) as {
        error?: string;
        fallbackEmail?: string;
      };

      if (!res.ok) {
        setError(body.error || "Something went wrong. Please try again.");
        setFallbackEmail(body.fallbackEmail || "");
        setStatus("error");
        return;
      }

      form.reset();
      setService("");
      setStatus("sent");
    } catch {
      setError("We couldn't reach the server. Please check your connection and try again.");
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
          <p className="text-xl text-gray-600">
            Fill out the form below and one of our consultants will get back to you within 24 hours.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {status === "sent" ? (
            <div
              className="bg-white p-10 shadow-lg text-center"
              role="status"
              aria-live="polite"
            >
              <h3 className="text-2xl font-bold mb-3">Thank you — your message is on its way.</h3>
              <p className="text-gray-600 mb-6">
                One of our consultants will get back to you within 24 hours.
              </p>
              <Button
                type="button"
                onClick={() => setStatus("idle")}
                className="bg-black hover:bg-gray-800 text-white rounded-none py-6 px-8"
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form className="bg-white p-8 shadow-lg" onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">
                {status === "error" && (
                  <div
                    className="border border-red-300 bg-red-50 text-red-800 px-4 py-3 text-sm"
                    role="alert"
                    aria-live="assertive"
                  >
                    {error}{" "}
                    {fallbackEmail && (
                      <a href={`mailto:${fallbackEmail}`} className="underline font-medium">
                        {fallbackEmail}
                      </a>
                    )}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Your first name"
                      className="rounded-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name*
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Your last name"
                      className="rounded-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email*
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      className="rounded-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="rounded-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company name"
                    className="rounded-none"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service of Interest
                  </label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger id="service" className="rounded-none">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="suite1-demo">Suite1 Platform Demo</SelectItem>
                      <SelectItem value="automation">Business Automation</SelectItem>
                      <SelectItem value="ai-integration">AI Integration</SelectItem>
                      <SelectItem value="consulting">Strategic Consulting</SelectItem>
                      <SelectItem value="implementation">Platform Implementation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message*
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry"
                    className="rounded-none min-h-[150px]"
                    required
                  />
                </div>

                {/* Honeypot: hidden from users, catnip for bots. */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      className="h-4 w-4 text-black border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy" className="text-gray-600">
                      I agree to the{" "}
                      <Link href="/privacy" className="text-black underline">
                        Privacy Policy
                      </Link>{" "}
                      and consent to being contacted regarding my inquiry.
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-black hover:bg-gray-800 text-white rounded-none py-6 disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Submit Inquiry"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
