// generate-sitemap.js

const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');

const links = [
  {
    url: '/', // your one-page site's root
    changefreq: 'monthly',
    priority: 1.0,
  },
];

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: 'https://joecapondesigns.com' });

  const xmlData = await streamToPromise(Readable.from(links).pipe(stream)).then(data => data.toString());

  // Write sitemap to public folder
  createWriteStream('./public/sitemap.xml').write(xmlData);
  console.log('✅ Sitemap successfully created!');
}

generateSitemap().catch((err) => {
  console.error('❌ Error generating sitemap:', err);
});

