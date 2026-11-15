/**
 * Service page metadata: single source of truth for the five service pages.
 *
 * Titles and descriptions come from the prototype's SEO blueprint
 * (titles <= 62 chars, descriptions <= 160). Keeping them here means the nav,
 * the footer, the sitemap and the <head> can never disagree about what a
 * service is called.
 */

export type ServiceMeta = {
  /** Path without a trailing slash, e.g. "/services/client-portals" */
  slug: string;
  /** Label used in navigation and footer */
  name: string;
  eyebrow: string;
  h1: string;
  lead: string;
  ctaLabel: string;
  /** <title>, <= 62 chars */
  title: string;
  /** meta description, <= 160 chars */
  description: string;
  schemaType: "Service" | "SoftwareApplication";
};

export const services: ServiceMeta[] = [
  {
    slug: "/services/websites-hosting-vps",
    name: "Websites, Hosting & VPS",
    eyebrow: "Websites, Hosting & VPS",
    h1: "Fast, secure hosting and VPS, managed for you.",
    lead: "SEO-ready websites on managed infrastructure: security, backups and monitoring handled, so your site and the systems behind it stay up without you thinking about them.",
    ctaLabel: "Talk about hosting",
    title: "Managed Website Hosting & VPS | Mike Beasley & Associates",
    description:
      "SEO-ready websites with managed hosting and private VPS: security, backups and monitoring handled for you. Talk to Mike Beasley & Associates.",
    schemaType: "Service",
  },
  {
    slug: "/services/client-portals",
    name: "Client Portals",
    eyebrow: "Client Portals",
    h1: "Client portals without the email chain.",
    lead: "Documents, e-signatures, forms, invoices and messages in one place your clients can actually find, connected to the systems you already run on.",
    ctaLabel: "Book a portal planning call",
    title: "Client Portal Development | Mike Beasley & Associates",
    description:
      "Secure client portals for documents, e-signatures, forms, invoices and messages, connected to your systems. Book a portal planning call.",
    schemaType: "Service",
  },
  {
    slug: "/services/donor-management-system",
    name: "Donor Management System",
    eyebrow: "Donor Management System",
    h1: "A donor management system that runs fundraising for you.",
    lead: "Online giving, automatic acknowledgments, campaign tracking and board-ready reporting, built for lean fundraising teams who cannot afford admin time.",
    ctaLabel: "See a demo",
    title: "Donor Management System for Nonprofits | Mike Beasley",
    description:
      "Donor management with online giving, automatic acknowledgments, campaigns and board-ready reports for lean fundraising teams. See a demo.",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "/services/ai-agents-automation",
    name: "AI Agents & Business Automation",
    eyebrow: "AI Agents & Business Automation",
    h1: "AI agents and automation that handle the routine.",
    lead: "Intake, support triage, scheduling, document processing, back-office workflows and reporting, with human approval at every step that matters.",
    ctaLabel: "Book an automation review",
    title: "AI Agents & Business Process Automation | Mike Beasley",
    description:
      "AI agents and workflow automation with human approvals: intake, scheduling, follow-ups and reporting for lean teams. Book an automation review.",
    schemaType: "Service",
  },
  {
    slug: "/services/it-integration",
    name: "IT Integration",
    eyebrow: "IT Integration",
    h1: "Connect your tools into one efficient system.",
    lead: "Your CRM, accounting, database, email and calendar, donor or client records and your forms, connected to one core, so information is entered once and trusted everywhere.",
    ctaLabel: "Book an integration review",
    title: "IT Integration Services for Small Business | Mike Beasley & Associates",
    description:
      "Connect your CRM, accounting, payments, email and data into one system with monitored integrations. Book an integration review.",
    schemaType: "Service",
  },
];

export const SERVICE_SITE_URL = "https://mbeasleyllc.com";

export function getService(slug: string): ServiceMeta {
  const found = services.find((s) => s.slug === slug);
  if (!found) throw new Error(`Unknown service slug: ${slug}`);
  return found;
}
