import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Configuração otimizada para React 18 + Vite 7 + Tailwind CSS 4
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Remove a configuração de CSS do Vite (usaremos apenas postcss.config.cjs)
});