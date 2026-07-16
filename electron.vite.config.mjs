import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  main: {
    build: {
      lib: {
        entry: 'electron/main.js'
      }
    }
  },
  renderer: {
    root: '.',
    build: {
      rollupOptions: {
        input: fileURLToPath(new URL('./index.html', import.meta.url))
      }
    },
    // PWA is disabled for the desktop build but keeps the
    // virtual:pwa-register module resolvable as a no-op
    plugins: [vue(), vuetify({ autoImport: true }), VitePWA({ disable: true })],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
