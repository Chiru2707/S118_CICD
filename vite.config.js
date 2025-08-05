// vite.config.js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/S118_CICD/', // must match your GitHub repo name
  plugins: [react()],
});

