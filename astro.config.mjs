import { defineConfig } from 'astro/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

function customSitemap() {
  return {
    name: 'custom-sitemap',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const siteUrl = 'https://gsoucloud.sbs';
        const urls = [
          '/',
          '/plans/',
          '/start/',
          '/clients/',
          '/network/',
          '/library/',
          '/library/before-payment/',
          '/library/route-journey/',
          '/library/data-behavior/',
          '/library/maintenance-calendar/',
          '/library/error-messages/',
          '/library/device-limits/',
          '/library/experience-evaluation/',
          '/faq/'
        ];

        const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${siteUrl}${u}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u === '/' ? '1.0' : u.startsWith('/library/') && u !== '/library/' ? '0.8' : '0.9'}</priority>
  </url>`).join('\n')}
</urlset>`;

        const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteUrl}/sitemap-0.xml</loc>
  </sitemap>
</sitemapindex>`;

        const outDir = fileURLToPath(dir);
        fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemapXml);
        fs.writeFileSync(path.join(outDir, 'sitemap-0.xml'), sitemapXml);
        fs.writeFileSync(path.join(outDir, 'sitemap-index.xml'), sitemapIndexXml);
        console.log('✓ Custom sitemap.xml, sitemap-0.xml, sitemap-index.xml generated successfully!');
      }
    }
  };
}

export default defineConfig({
  site: 'https://gsoucloud.sbs',
  integrations: [customSitemap()],
  build: {
    format: 'directory'
  }
});
