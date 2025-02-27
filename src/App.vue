<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { watch, computed, ref } from 'vue'

const { locale, t } = useI18n()
const route = useRoute()
const router = useRouter()
const mobileMenuOpen = ref(false)

// Set locale based on route parameter
const routeLocale = computed(() => route.params.locale as string || 'en')

watch(routeLocale, (newLocale) => {
  if (newLocale && (newLocale === 'en' || newLocale === 'fr')) {
    locale.value = newLocale
  }
})

// Change language function
const changeLanguage = (lang: string) => {
  if (route.params.locale) {
    router.push(`/${lang}`)
  } else {
    router.push(`/${lang}`)
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <div class="app-container">
    <header>
      <nav>
        <div class="nav-container">
          <div class="logo">YourName</div>
          
          <!-- Mobile menu button -->
          <button class="mobile-menu-button" @click="toggleMobileMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <!-- Desktop navigation -->
          <div class="nav-links desktop-nav">
            <a href="#home">{{ t('nav.home') }}</a>
            <a href="#about">{{ t('nav.about') }}</a>
            <a href="#services">{{ t('nav.services') }}</a>
            <a href="#contact">{{ t('nav.contact') }}</a>
          </div>
          
          <div class="language-selector desktop-nav">
            <button 
              @click="changeLanguage('en')" 
              :class="{ active: locale === 'en' }"
              class="language-button"
            >EN</button>
            <button 
              @click="changeLanguage('fr')" 
              :class="{ active: locale === 'fr' }"
              class="language-button"
            >FR</button>
          </div>
        </div>
        
        <!-- Mobile navigation -->
        <div class="mobile-nav" :class="{ 'open': mobileMenuOpen }">
          <div class="mobile-nav-links">
            <a href="#home" @click="mobileMenuOpen = false">{{ t('nav.home') }}</a>
            <a href="#about" @click="mobileMenuOpen = false">{{ t('nav.about') }}</a>
            <a href="#services" @click="mobileMenuOpen = false">{{ t('nav.services') }}</a>
            <a href="#contact" @click="mobileMenuOpen = false">{{ t('nav.contact') }}</a>
            
            <div class="mobile-language-selector">
              <button 
                @click="changeLanguage('en'); mobileMenuOpen = false" 
                :class="{ active: locale === 'en' }"
                class="language-button"
              >English</button>
              <button 
                @click="changeLanguage('fr'); mobileMenuOpen = false" 
                :class="{ active: locale === 'fr' }"
                class="language-button"
              >Français</button>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <div class="footer-content">
        <div class="footer-info">
          <div class="footer-logo">YourName</div>
          <p class="footer-tagline">{{ t('footer.tagline') }}</p>
        </div>
        
        <div class="footer-links">
          <div class="footer-column">
            <h4>{{ t('footer.navigation') }}</h4>
            <a href="#home">{{ t('nav.home') }}</a>
            <a href="#about">{{ t('nav.about') }}</a>
            <a href="#services">{{ t('nav.services') }}</a>
            <a href="#contact">{{ t('nav.contact') }}</a>
          </div>
          
          <div class="footer-column">
            <h4>{{ t('footer.contact') }}</h4>
            <p>your.email@example.com</p>
            <p>+33 6 XX XX XX XX</p>
          </div>
          
          <div class="footer-column">
            <h4>{{ t('footer.language') }}</h4>
            <div class="language-footer">
              <button @click="changeLanguage('en')" :class="{ active: locale === 'en' }">English</button>
              <button @click="changeLanguage('fr')" :class="{ active: locale === 'fr' }">Français</button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>{{ t('footer.copyright') }}</p>
      </div>
    </footer>
  </div>
</template>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: 0 1px 2px var(--shadow-color);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
}

nav {
  position: relative;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--secondary-color);
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
}

.nav-links a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  position: relative;
}

.nav-links a:hover {
  color: var(--primary-color);
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background: var(--primary-gradient);
  transition: width 0.3s;
}

.nav-links a:hover::after {
  width: 100%;
}

.language-selector {
  display: flex;
  gap: 0.5rem;
}

.language-button {
  background: none;
  border: 1px solid var(--border-color);
  color: var(--text-color);
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-weight: 500;
  transition: all 0.2s;
}

.language-button.active {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.language-button:hover:not(.active) {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

/* Mobile menu */
.mobile-menu-button {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

.mobile-menu-button span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: var(--secondary-color);
  border-radius: 3px;
  transition: all 0.3s;
}

.mobile-nav {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: white;
  overflow: hidden;
  transition: height 0.3s ease;
  z-index: 5;
}

.mobile-nav.open {
  height: 100vh;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2rem;
  padding: 2rem;
}

.mobile-nav-links a {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--secondary-color);
  text-decoration: none;
}

.mobile-language-selector {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

main {
  flex: 1;
}

/* Footer */
footer {
  background-color: var(--light-background);
  padding: 4rem 2rem 2rem;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
}

.footer-info {
  flex: 1;
  min-width: 250px;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 1rem;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-tagline {
  color: var(--light-text);
  max-width: 300px;
}

.footer-links {
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-column h4 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
}

.footer-column a {
  color: var(--light-text);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-column a:hover {
  color: var(--primary-color);
}

.footer-column p {
  color: var(--light-text);
}

.language-footer {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.language-footer button {
  background: none;
  border: none;
  color: var(--light-text);
  cursor: pointer;
  padding: 0;
  text-align: left;
  font-weight: 400;
  transition: color 0.2s;
}

.language-footer button.active {
  color: var(--primary-color);
  font-weight: 500;
}

.language-footer button:hover:not(.active) {
  color: var(--primary-color);
}

.footer-bottom {
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
}

.footer-bottom p {
  color: var(--light-text);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  
  .mobile-menu-button {
    display: flex;
  }
  
  .mobile-nav {
    display: block;
  }
  
  .nav-container {
    padding: 1rem 1.5rem;
  }
  
  .footer-content {
    flex-direction: column;
    gap: 2rem;
  }
  
  .footer-links {
    gap: 2rem;
  }
}
</style>