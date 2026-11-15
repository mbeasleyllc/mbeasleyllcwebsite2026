import type { GetServerSideProps } from "next";
import { services } from "@/lib/services";
import { solutions } from "@/lib/solutions";

/**
 * /sitemap.xml — generated from the same configs the pages are built from, so
 * a new service or audience page appears here automatically rather than being
 * forgotten. The launch checklist asks for "canonicals, clean sitemap".
 *
 * Legal and utility pages are included; thank-you and API routes are not, and
 * are excluded in robots.txt as well.
 */

const SITE_URL = "https://mbeasleyllc.com";

type Entry = { path: string; priority: string; changefreq: string };

function entries(): Entry[] {
  const staticPages: Entry[] = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/services", priority: "0.9", changefreq: "monthly" },
    { path: "/solutions", priority: "0.9", changefreq: "monthly" },
    { path: "/contact", priority: "0.9", changefreq: "monthly" },
    { path: "/about", priority: "0.7", changefreq: "monthly" },
    { path: "/more", priority: "0.4", changefreq: "yearly" },
    { path: "/more/brand-design", priority: "0.4", changefreq: "yearly" },
    { path: "/more/communities", priority: "0.4", changefreq: "yearly" },
    { path: "/privacy", priority: "0.2", changefreq: "yearly" },
    { path: "/terms", priority: "0.2", changefreq: "yearly" },
    { path: "/accessibility", priority: "0.2", changefreq: "yearly" },
  ];

  return [
    ...staticPages,
    ...services.map((s) => ({
      path: s.slug,
      priority: "0.8",
      changefreq: "monthly",
    })),
    ...solutions.map((s) => ({
      path: s.slug,
      priority: "0.8",
      changefreq: "monthly",
    })),
  ];
}

function render(list: Entry[]) {
  const lastmod = new Date().toISOString().split("T")[0];
  const urls = list
    .map(
      (e) => `  <url>
    <loc>${SITE_URL}${e.path === "/" ? "/" : e.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400");
  res.write(render(entries()));
  res.end();
  return { props: {} };
};

/** Never rendered as HTML — getServerSideProps writes the response directly. */
export default function Sitemap() {
  return null;
}
