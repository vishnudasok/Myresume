import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Update if deploying to a subpath
  plugins: [react()],
  build: {
    assetsInlineLimit: 0,
    sourcemap: true, // For debugging
    chunkSizeWarningLimit: 1000, // Increase size limit for chunks
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Separate vendor chunk
        },
      },
    },
  },
});
