import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Code splitting for better performance (function form for Vite 8+)
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor';
          }
          if (id.includes('node_modules/react-router-dom/')) {
            return 'router';
          }
          if (id.includes('node_modules/framer-motion/')) {
            return 'motion';
          }
          if (id.includes('node_modules/react-hook-form/')) {
            return 'forms';
          }
        },
      },
    },
    assetsInlineLimit: 4096,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
