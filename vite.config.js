import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Ganti 'repo-name' dengan nama repository GitHub Anda
  plugins: [react()]
})
