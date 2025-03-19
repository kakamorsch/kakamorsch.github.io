import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  base: '/kakamorsch.github.io/',
	plugins: [vue(), tailwindcss()],
});
