import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './assets/css/style.css'

if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
  import('virtual:pwa-register').then(({ registerSW }) => {
    registerSW({ immediate: true })
  }).catch(() => {
    // PWA plugin not enabled (e.g. electron build) - ignore
  })
}

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
