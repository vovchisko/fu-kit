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
  define: {
    '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
  }
})
