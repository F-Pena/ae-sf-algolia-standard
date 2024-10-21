import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    modulePreload: {
      polyfill: false,
    },
    manifest: true,
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        algoliaResults: resolve(__dirname, 'algolia-results/index.html'),
        algoliaSearchbox: resolve(__dirname, 'algolia-searchbox/index.html'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: 'assets/[name][extname]',
      }
    },
  },
  server: {
    hmr: true,
    watch: {
      usePolling: true,
    }
  },
  optimizeDeps: {
    include: ["react", "react-dom"]
  }
})