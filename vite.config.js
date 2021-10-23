import { defineConfig } from 'vite'
import vue              from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: { outDir: 'docs' },
  plugins: [ vue() ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './scss';`,
      },
    },
  },
})
