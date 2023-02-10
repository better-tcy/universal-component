import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, 'src/lib.js'),
      name: 'universalComponent',
      fileName: 'universal-component',
    },
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
