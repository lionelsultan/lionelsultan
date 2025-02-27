import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'

// Import translations
import en from './locales/en.json'
import fr from './locales/fr.json'

// Configure i18n
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    fr
  }
})

// Configure router
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/:locale',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Create and mount the app
const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')