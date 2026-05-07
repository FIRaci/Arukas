import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({ threshold: 1024 }),
  ],
  build: {
    target: 'es2020',
    minify: 'esbuild',
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React core
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          // Firebase
          if (id.includes('node_modules/firebase')) {
            return 'firebase-vendor';
          }
          // Extra dictionary and Vi-Jp parts use dynamic import()
          // Rollup handles their chunk splitting automatically — do NOT assign here
          // JLPT vocab entries
          if (id.includes('vocabEntriesN')) {
            const match = id.match(/vocabEntriesN(\d)/);
            if (match) return `vocab-n${match[1]}`;
          }
          // Grammar data
          if (id.includes('grammarCategories') || id.includes('grammarExpansion') || id.includes('grammarCrossRef') || id.includes('grammarDictRef')) {
            return 'grammar-data';
          }
          // Vietnamese meanings
          if (id.includes('vietnameseMeanings')) {
            return 'vi-meanings';
          }
          // Kanji data
          if (id.includes('kanjiJlpt') || id.includes('kanjiSpecial')) {
            return 'kanji-data';
          }
          // Topic vocab + other data
          if (id.includes('vocabEntriesTopics') || id.includes('compoundVocab') || id.includes('mockData')) {
            return 'vocab-topics';
          }
          // Core utilities
          if (id.includes('jlptWordLists') || id.includes('wordEnrichment')) {
            return 'vocab-core';
          }
        },
      },
    },
  },
  // Optimize dev server
  server: {
    hmr: {
      overlay: false,
    },
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})
