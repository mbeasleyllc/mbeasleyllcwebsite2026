/**
 * Connected-systems diagram configurations.
 *
 * The diagram is a single component (components/home/SystemsHub.tsx) driven by
 * these configs, so the homepage hero and the IT Integration hero cannot drift
 * apart. Adding a third use means adding a config here, not copying markup.
 *
 * Homepage hero  — the whole stack around the client's business (prototype p.12)
 * IT Integration — the client's existing tools around one connected core (p.31)
 */

export type IconKey =
  | "globe"
  | "heart"
  | "users"
  | "bot"
  | "plug"
  | "server"
  | "crm"
  | "ledger"
  | "database"
  | "mail"
  | "forms";

export type SystemNode = {
  icon: IconKey;
  label: string;
  note: string;
};

export type SystemDiagram = {
  core: { eyebrow: string; label: string };
  nodes: SystemNode[];
};

/** Homepage hero — "website, donor system, portal, AI agents, integrations, VPS". */
export const homeSystems: SystemDiagram = {
  core: { eyebrow: "Core", label: "Your business" },
  nodes: [
    { icon: "globe", label: "Website", note: "Forms, content, booking" },
    { icon: "heart", label: "Donor system", note: "Giving, receipts, reporting" },
    { icon: "users", label: "Client portal", note: "Documents, invoices, messages" },
    { icon: "bot", label: "AI agents", note: "Triage, draft, follow up" },
    { icon: "plug", label: "Integrations", note: "CRM, accounting, email" },
    { icon: "server", label: "Hosting & VPS", note: "Backups, patching, uptime" },
  ],
};

/** IT Integration hero — "CRM, accounting, database, email and calendar,
 *  donor or client system, and forms around one connected core". */
export const integrationSystems: SystemDiagram = {
  core: { eyebrow: "One connected core", label: "Your systems" },
  nodes: [
    { icon: "crm", label: "CRM", note: "Contacts, deals, history" },
    { icon: "ledger", label: "Accounting", note: "Invoices, payments, reconciliation" },
    { icon: "database", label: "Database", note: "Records of record, kept clean" },
    { icon: "mail", label: "Email & calendar", note: "Sending, scheduling, follow-up" },
    { icon: "heart", label: "Donor or client system", note: "Giving or engagement history" },
    { icon: "forms", label: "Forms", note: "Intake, requests, applications" },
  ],
};
