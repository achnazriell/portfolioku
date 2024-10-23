import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // atau 'localhost'
    port: 3000, // Ganti dengan port yang diinginkan
  },
});
