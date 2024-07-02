// Ignore CSS imports
require('ignore-styles');

require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react']
});

const Sitemap = require('react-router-sitemap').default;
const router = require('./src/App').default; // Adjust the path

// Define your paths manually if needed
const paths = [
  { path: '/', lastmod: '2024-07-02', changefreq: 'daily', priority: 1.0 },
  { path: '/info', lastmod: '2024-07-02', changefreq: 'monthly', priority: 0.8 },
  { path: '/program', lastmod: '2024-07-02', changefreq: 'monthly', priority: 0.8 },
  { path: '/rsvp', lastmod: '2024-07-02', changefreq: 'monthly', priority: 0.8 },
  { path: '/gifts', lastmod: '2024-07-02', changefreq: 'monthly', priority: 0.8 },
  { path: '/contacts', lastmod: '2024-07-02', changefreq: 'monthly', priority: 0.8 },
  // Add more paths as needed
];

new Sitemap(router)
  .applyParams(paths) // Apply parameters to ensure all paths are included
  .build('https://svatba.novak.my')
  .save('./public/sitemap.xml');
