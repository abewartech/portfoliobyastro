// Generates sitemap.xml after `astro build` — dependency-free alternative
// to @astrojs/sitemap (v1 is incompatible with this Astro version's outDir).
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://abewartech.github.io';
const BASE = '/portfoliobyastro';
const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const SRC = fileURLToPath(new URL('../src/', import.meta.url));
const today = new Date().toISOString().slice(0, 10);

// Page date for sitemap ordering: blog posts use their frontmatter
// publishDate, everything else falls back to the build date.
const pageDate = (rel) => {
  const m = rel.match(/^blog\/([^/]+)\/?$/);
  if (m) {
    try {
      const src = readFileSync(join(SRC, 'content/blog', `${m[1]}.md`), 'utf8');
      const fm = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      const d = fm && fm[1].match(/^publishDate:\s*(.+?)\s*$/m);
      if (d) {
        const t = new Date(d[1]);
        if (!isNaN(t)) return t.toISOString().slice(0, 10);
      }
    } catch {
      /* fall through to the build date */
    }
  }
  return today;
};

const entries = [];
const walk = (dir) => {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) {
      walk(p);
      continue;
    }
    if (!entry.endsWith('.html')) continue;
    let rel = relative(DIST, p).split(sep).join('/');
    if (rel === '404.html') continue; // never index the 404 page
    if (rel.endsWith('/index.html')) rel = rel.slice(0, -'index.html'.length);
    else if (rel === 'index.html') rel = '';
    entries.push({ loc: `${SITE}${BASE}/${rel}`, lastmod: pageDate(rel) });
  }
};
walk(DIST);

// oldest first (then by URL for equal dates)
entries.sort(
  (a, b) => a.lastmod.localeCompare(b.lastmod) || a.loc.localeCompare(b.loc)
);

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  entries
    .map(
      ({ loc, lastmod }) =>
        `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n  </url>`
    )
    .join('\n') +
  `\n</urlset>\n`;

writeFileSync(join(DIST, 'sitemap.xml'), xml);
console.log(`sitemap.xml written with ${entries.length} URLs`);
