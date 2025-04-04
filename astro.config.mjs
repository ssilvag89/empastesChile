import { defineConfig } from 'astro/config';

// Configuración de Astro
export default defineConfig({
  output:"server",
  site: 'https://www.ejemplo.com',
  integrations: [],
  server: {
    host: '127.0.0.1',
    port: 3000,
  }
});
