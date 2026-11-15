/**
 * Audience ("solutions") page metadata: single source of truth for the three
 * segment entry points the prototype calls for:
 *
 *   "Solutions (by audience) /solutions/nonprofits/ · /associations/ ·
 *    /business/. Audience pages give nonprofits, associations and businesses
 *    their own entry points."
 *
 * The prototype gives no per-page blueprint for these, so the titles and
 * descriptions are written to the same rules as the service pages
 * (titles <= 62 chars, descriptions <= 160) and target segment-specific
 * search intent.
 */

export type SolutionMeta = {
  slug: string;
  name: string;
  eyebrow: string;
  h1: string;
  lead: string;
  ctaLabel: string;
  title: string;
  description: string;
};

export const solutions: SolutionMeta[] = [
  {
    slug: "/solutions/nonprofits",
    name: "Nonprofits & Foundations",
    eyebrow: "For nonprofits & foundations",
    h1: "Fundraising that runs without the admin.",
    lead: "Donor records, online giving, acknowledgments and board reporting in one system, so a lean fundraising team spends its time with donors, not in spreadsheets.",
    ctaLabel: "Book a free review",
    title: "Donor Systems for Nonprofits | Mike Beasley & Associates",
    description:
      "Donor management, online giving, automatic acknowledgments and board-ready reporting for lean nonprofit fundraising teams. Book a free review.",
  },
  {
    slug: "/solutions/associations",
    name: "Associations & Membership",
    eyebrow: "For associations & membership bodies",
    h1: "Membership that renews itself.",
    lead: "Member portals, renewals, dues and documents handled by the system rather than by whoever has time, with one login for every member.",
    ctaLabel: "Book a free review",
    title: "Membership Systems for Associations | Mike Beasley & Associates",
    description:
      "Member portals, automated renewals, dues and documents for associations and membership bodies. Reduce admin and keep members engaged.",
  },
  {
    slug: "/solutions/business",
    name: "Small & Midsize Business",
    eyebrow: "For small & midsize business",
    h1: "Systems that scale without the headcount.",
    lead: "Intake, quotes, invoicing and follow-up automated end to end, so growth does not mean hiring someone to move data between tools.",
    ctaLabel: "Book a free review",
    title: "Automation for Small Business | Mike Beasley & Associates",
    description:
      "Client portals, AI intake and workflow automation for small and midsize businesses. Grow without adding admin headcount. Book a free review.",
  },
];

export const SOLUTION_SITE_URL = "https://mbeasleyllc.com";

export function getSolution(slug: string): SolutionMeta {
  const found = solutions.find((s) => s.slug === slug);
  if (!found) throw new Error(`Unknown solution slug: ${slug}`);
  return found;
}
