import { defineConfig } from 'vite'
import pluginVue        from '@vitejs/plugin-vue'

export default defineConfig({
  build: { outDir: 'docs' },
  plugins: [ pluginVue() ],
  server: {
    port: 4000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './scss';`,
      },
    },
  },
  define: {
    '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
  },
})
