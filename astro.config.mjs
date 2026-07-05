import { defineConfig } from 'astro/config';

// Interim: served as a project page under /schroedingers.blog/.
// Once the schroedingers.blog domain is registered and pointed at
// GitHub Pages: set site to 'https://schroedingers.blog', delete
// the base line, and add a public/CNAME file containing the domain.
export default defineConfig({
  site: 'https://chrisschroedinger.github.io',
  base: '/schroedingers.blog',
});
