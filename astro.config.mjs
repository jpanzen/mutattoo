import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false, // Zkus tohle nastavit na false, pokud používáš vlastní global.css
  })],
});