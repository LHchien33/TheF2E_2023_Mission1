import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'development' ? '/' : '/TheF2E_2023_Mission1/',
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('swiper'),
      },
    },
  }), svgLoader()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}));
