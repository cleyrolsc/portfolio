import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/', // Replace 'portofolio' with your repo name
  plugins: [react()],
});