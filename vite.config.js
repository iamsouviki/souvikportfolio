import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'vendor';
            }
            if (id.includes('framer-motion') || id.includes('react-type-animation')) {
              return 'animations';
            }
          }
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
