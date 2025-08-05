// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/S118_CICD/', // MUST match repo name exactly
  plugins: [react()],
});


