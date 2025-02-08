import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',  // Important pour corriger les erreurs 404
  server: {
    historyApiFallback: true, // Pour éviter les erreurs sur les routes React
    port: 3000,
    open: true,
  },
});
