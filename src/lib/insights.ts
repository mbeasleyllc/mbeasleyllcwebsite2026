/**
 * Insights — the article set, in one place.
 *
 * The hub, the sitemap and each article's metadata all read from here, so a new
 * article is one entry plus its page file and cannot drift out of the sitemap.
 *
 * WHAT WAS HERE BEFORE, AND WHY IT IS GONE
 * The previous section carried six topic pages that were fabricated: they named
 * six staff members who do not exist ("Leadership Development Director",
 * "Executive Coach", "Diversity & Inclusion Strategist"), advertised "18
 * articles" while listing six, and every article link pointed at a URL that
 * 404'd. None of it was real. It has been removed rather than restyled.
 *
 * Rules this file follows, and any future entry must follow:
 * - Only articles that actually exist are listed. No placeholder cards.
 * - Attributed to Mike Beasley, the one real author.
 * - No invented statistics, client results, or dates that imply a history the
 *   site does not have. These are newly published.
 */

export interface Insight {
  /** URL segment — the page lives at /insights/<slug> */
  slug: string;
  /** Card and nav title */
  title: string;
  /** On-page H1 (can be a fuller sentence than the title) */
  h1: string;
  /** Meta description, ~150 chars */
  description: string;
  /** Two-line card excerpt */
  excerpt: string;
  /** One of the categories below */
  category: string;
  /** ISO date, used for schema and display */
  published: string;
  /** Shown as "N min read" */
  readingMinutes: number;
  /** The 3–4 claims the article actually makes, shown up top */
  takeaways: string[];
}

export const INSIGHT_CATEGORIES = [
  "Automation",
  "AI agents",
  "Systems",
] as const;

export const insights: Insight[] = [
  {
    slug: "digital-transformation",
    title: "Digital transformation without the theatre",
    h1: "Digital transformation without the theatre",
    description:
      "Most transformation projects fail at the joins between systems, not at the software. How to tell the difference before you spend.",
    excerpt:
      "Most transformation budgets go on software. Most of the failures happen in the gaps between it. Here is how to tell which one you are buying.",
    category: "Systems",
    published: "2026-11-04",
    readingMinutes: 7,
    takeaways: [
      "Buying software is not the same as connecting systems, and only one of them changes how the work gets done.",
      "The failure point is almost always the join — the point where one system has to hand something to another.",
      "You can find your worst joins in an afternoon, without buying anything.",
    ],
  },
  {
    slug: "future-of-work",
    title: "What AI agents actually change about work",
    h1: "What AI agents actually change about work",
    description:
      "A grounded look at what AI agents do well, where they fail, and why the useful question is which tasks you hand over.",
    excerpt:
      "AI agents are not a headcount story. They are a task story. The useful question is not how many people, but which jobs to hand over.",
    category: "AI agents",
    published: "2026-11-11",
    readingMinutes: 8,
    takeaways: [
      "Agents are good at bounded, repetitive, text-shaped work — and bad at judgement, accountability and anything ambiguous.",
      "The unit of change is the task, not the role.",
      "If you cannot describe the task as a set of rules, an agent will not do it reliably yet.",
    ],
  },
  {
    slug: "strategic-planning",
    title: "Strategic planning for systems, not software",
    h1: "Strategic planning for systems, not software",
    description:
      "Why a systems plan outlives a software plan, and how to sequence the work so each step is useful on its own.",
    excerpt:
      "Software plans go stale the moment a vendor changes its pricing. Systems plans survive it. Here is how to plan for the thing that lasts.",
    category: "Automation",
    published: "2026-11-15",
    readingMinutes: 7,
    takeaways: [
      "Plan the flow of information, not the list of tools — tools are replaceable, flows are not.",
      "Sequence so every step stands alone; a step that only pays off after the next one is a bet, not a phase.",
      "Decide what you will never automate before you decide what you will.",
    ],
  },
];

/** Lookup by slug, used by the article pages. */
export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}

/** Newest first — the hub and any "latest" list should use this. */
export const insightsNewestFirst = [...insights].sort((a, b) =>
  b.published.localeCompare(a.published),
);
