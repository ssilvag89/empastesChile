import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// Configuración de Astro
export default defineConfig({
  output:"server",
  adapter: vercel(),
  site: 'https://www.ejemplo.com',
  integrations: [],
  server: {
    host: '127.0.0.1',
    port: 3000,
  }
});
