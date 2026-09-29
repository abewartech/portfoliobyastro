// Generates sitemap.xml after `astro build` — dependency-free alternative
// to @astrojs/sitemap (v1 is incompatible with this Astro version's outDir).
import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://abewartech.github.io';
const BASE = '/portfoliobyastro';
const DIST = fileURLToPath(new URL('../dist/', import.meta.url));

const urls = [];
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
    urls.push(`${SITE}${BASE}/${rel}`);
  }
};
walk(DIST);

const today = new Date().toISOString().slice(0, 10);
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .sort()
    .map(
      (u) =>
        `  <url>\n    <loc>${u}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n  </url>`
    )
    .join('\n') +
  `\n</urlset>\n`;

writeFileSync(join(DIST, 'sitemap.xml'), xml);
console.log(`sitemap.xml written with ${urls.length} URLs`);
