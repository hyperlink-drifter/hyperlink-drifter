import { defineConfig } from 'waku/config';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  unstable_viteConfigs: {
    common: () => ({
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
          '@@': fileURLToPath(new URL('.', import.meta.url)),
        },
      },
    }),
  },
});
