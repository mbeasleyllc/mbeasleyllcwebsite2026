/**
 * Single source of truth for site navigation.
 * Structure follows the v2 prototype's information architecture:
 * Services mega-menu grouped by customer journey, plus Solutions,
 * Hosting & VPS, About and Insights.
 *
 * Courses / LMS are deliberately absent: removed from the offer in v2.
 */

export type NavLink = {
  name: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  blurb: string;
  items: NavLink[];
};

/** Grouped by what the visitor is trying to do, per the prototype. */
export const serviceGroups: NavGroup[] = [
  {
    label: "Build & host",
    blurb: "The foundation",
    items: [
      {
        name: "Websites, Hosting & VPS",
        href: "/services/websites-hosting-vps",
        description: "Fast, secure sites on managed infrastructure",
      },
    ],
  },
  {
    label: "Run operations",
    blurb: "The day-to-day",
    items: [
      {
        name: "Client Portals",
        href: "/services/client-portals",
        description: "Documents, forms, invoices and messages in one place",
      },
      {
        name: "Donor Management System",
        href: "/services/donor-management-system",
        description: "Giving, receipts and board-ready reporting",
      },
    ],
  },
  {
    label: "Automate & connect",
    blurb: "Remove the routine",
    items: [
      {
        name: "AI Agents & Business Automation",
        href: "/services/ai-agents-automation",
        description: "Agents that triage and draft, with your approval",
      },
      {
        name: "IT Integration",
        href: "/services/it-integration",
        description: "Connect CRM, accounting, email and data",
      },
    ],
  },
];

/** Kept findable but out of the main journey: "Also from us". */
export const moreServices: NavLink[] = [
  { name: "Brand & Logo Design", href: "/more/brand-design" },
  { name: "Communities", href: "/more/communities" },
];

export const solutions: NavLink[] = [
  {
    name: "Nonprofits & Foundations",
    href: "/solutions/nonprofits",
    description: "Donor management, giving and acknowledgments",
  },
  {
    name: "Associations & Membership",
    href: "/solutions/associations",
    description: "Member portals, renewals and communities",
  },
  {
    name: "Small & Midsize Business",
    href: "/solutions/business",
    description: "Portals, AI intake and workflow automation",
  },
];

export const primaryNav: NavLink[] = [
  { name: "Solutions", href: "/solutions" },
  { name: "Hosting & VPS", href: "/services/websites-hosting-vps" },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/insights" },
];

/** Existing clients log in here. */
export const PORTAL_URL = "https://secure.mbeasleyllc.com";

export const CONTACT_EMAIL = "mike@mbeasleyllc.com";

/** The two booking paths the prototype calls for on /contact:
 *  "15-minute intro and the 30-minute free automation review". */
export const INTRO_BOOKING_URL = "https://tidycal.com/mikebeasley/15-minute-meeting";
export const REVIEW_BOOKING_URL = "https://tidycal.com/mikebeasley/30-minute-meeting";

/** The header CTA points at /contact, which offers both booking paths and the
 *  form: one destination for every "Book a free review" button on the site. */
export const REVIEW_HREF = "/contact";

/** All eight capabilities, for the homepage grid. */
export const capabilities: NavLink[] = [
  { name: "Websites", href: "/services/websites-hosting-vps" },
  { name: "Managed Hosting", href: "/services/websites-hosting-vps" },
  { name: "Managed VPS", href: "/services/websites-hosting-vps" },
  { name: "Client Portals", href: "/services/client-portals" },
  { name: "Donor Management", href: "/services/donor-management-system" },
  { name: "AI Agents", href: "/services/ai-agents-automation" },
  { name: "Business Automation", href: "/services/ai-agents-automation" },
  { name: "IT Integration", href: "/services/it-integration" },
];
