import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Keep watchers away from generated/runtime folders to reduce Windows watcher churn.
      hmr: process.env.DISABLE_HMR !== 'true',
      strictPort: true,
      watch: {
        usePolling: false,
        ignored: [
          '**/.git/**',
          '**/node_modules/**',
          '**/node_modules/.vite/**',
          '**/dist/**',
          '**/build/**',
          '**/coverage/**',
          '**/tmp/**',
          '**/*.log',
          '**/screenshots/**',
          '**/media/**',
          '**/architecture/**',
          '**/architecture-exports/**',
        ],
      },
    },
  };
});
