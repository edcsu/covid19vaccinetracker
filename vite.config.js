import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'icon.png'],
      manifest: {
        name: 'Covid-19 Vaccine Tracker App',
        short_name: 'VaccineTracker',
        description: 'A Covid-19 vaccine tracker app',
        theme_color: '#00ADBC',
        icons: [
          {
            src: 'icon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
