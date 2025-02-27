<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section id="home" class="hero-section">
      <div class="hero-background">
        <div class="hero-gradient"></div>
        <div class="hero-pattern"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <span class="hero-eyebrow">{{ t('hero.greeting') }}</span>
          <h1>
            <span class="gradient-text">{{ t('hero.name') }}</span>
          </h1>
          <h2 class="hero-subtitle">{{ t('hero.title') }}</h2>
          <p class="hero-description">{{ t('hero.subtitle') }}</p>
          <div class="hero-cta">
            <a href="#contact" class="primary-button">{{ t('hero.cta_primary') }}</a>
            <a href="#services" class="secondary-button">{{ t('hero.cta_secondary') }}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">{{ t('about.eyebrow') }}</span>
          <h2 class="section-title">{{ t('about.title') }}</h2>
        </div>
        <div class="about-content">
          <div class="about-text">
            <p>{{ t('about.content') }}</p>
            <p>{{ t('about.location') }}</p>
          </div>
          <div class="about-stats">
            <div class="stat-card">
              <div class="stat-number gradient-text">5+</div>
              <div class="stat-label">{{ t('about.stats.years') }}</div>
            </div>
            <div class="stat-card">
              <div class="stat-number gradient-text">50+</div>
              <div class="stat-label">{{ t('about.stats.clients') }}</div>
            </div>
            <div class="stat-card">
              <div class="stat-number gradient-text">100%</div>
              <div class="stat-label">{{ t('about.stats.satisfaction') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">{{ t('services.eyebrow') }}</span>
          <h2 class="section-title">{{ t('services.title') }}</h2>
        </div>
        <div class="services-grid">
          <div class="service-card card">
            <div class="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
            </div>
            <h3>{{ t('services.digital_strategy.title') }}</h3>
            <p>{{ t('services.digital_strategy.description') }}</p>
          </div>
          <div class="service-card card">
            <div class="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            <h3>{{ t('services.project_management.title') }}</h3>
            <p>{{ t('services.project_management.description') }}</p>
          </div>
          <div class="service-card card">
            <div class="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
            </div>
            <h3>{{ t('services.digital_transformation.title') }}</h3>
            <p>{{ t('services.digital_transformation.description') }}</p>
          </div>
          <div class="service-card card">
            <div class="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </div>
            <h3>{{ t('services.consulting.title') }}</h3>
            <p>{{ t('services.consulting.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="testimonials-section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">{{ t('testimonials.eyebrow') }}</span>
          <h2 class="section-title">{{ t('testimonials.title') }}</h2>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card card">
            <div class="testimonial-content">
              <p>"{{ t('testimonials.testimonial1.content') }}"</p>
            </div>
            <div class="testimonial-author">
              <div class="testimonial-author-info">
                <h4>{{ t('testimonials.testimonial1.author') }}</h4>
                <p>{{ t('testimonials.testimonial1.position') }}</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card card">
            <div class="testimonial-content">
              <p>"{{ t('testimonials.testimonial2.content') }}"</p>
            </div>
            <div class="testimonial-author">
              <div class="testimonial-author-info">
                <h4>{{ t('testimonials.testimonial2.author') }}</h4>
                <p>{{ t('testimonials.testimonial2.position') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">{{ t('contact.eyebrow') }}</span>
          <h2 class="section-title">{{ t('contact.title') }}</h2>
          <p class="contact-subtitle">{{ t('contact.subtitle') }}</p>
        </div>
        
        <div class="contact-container">
          <div class="contact-info">
            <div class="contact-card card">
              <div class="contact-item">
                <div class="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h3>{{ t('contact.email') }}</h3>
                  <p>your.email@example.com</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h3>{{ t('contact.phone') }}</h3>
                  <p>+33 6 XX XX XX XX</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h3>{{ t('contact.location') }}</h3>
                  <p>{{ t('contact.locations.paris') }}</p>
                  <p>{{ t('contact.locations.marseille') }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-form-container">
            <form class="contact-form card">
              <div class="form-group">
                <label for="name">{{ t('contact.form.name') }}</label>
                <input type="text" id="name" name="name">
              </div>
              <div class="form-group">
                <label for="email">{{ t('contact.form.email') }}</label>
                <input type="email" id="email" name="email">
              </div>
              <div class="form-group">
                <label for="message">{{ t('contact.form.message') }}</label>
                <textarea id="message" name="message" rows="5"></textarea>
              </div>
              <button type="submit" class="submit-button">
                {{ t('contact.form.submit') }}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="button-icon"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-eyebrow {
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-title {
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 6rem 0;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(247, 250, 252, 0.8) 0%, rgba(247, 250, 252, 0.4) 100%);
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(var(--border-color) 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.5;
}

.hero-content {
  max-width: 800px;
  position: relative;
  z-index: 1;
}

.hero-eyebrow {
  display: block;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.hero-content h1 {
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 2rem;
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--light-text);
  margin-bottom: 2.5rem;
  max-width: 600px;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.primary-button {
  display: inline-block;
  background: var(--primary-gradient);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 4px 6px rgba(99, 91, 255, 0.2);
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 14px rgba(99, 91, 255, 0.3);
  color: white;
}

.secondary-button {
  display: inline-block;
  background: white;
  color: var(--primary-color);
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s;
  border: 1px solid var(--border-color);
}

.secondary-button:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* About Section */
.about-section {
  background-color: var(--light-background);
  padding: 8rem 0;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--light-text);
}

.about-text p {
  margin-bottom: 1.5rem;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.stat-card {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px var(--shadow-color);
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--light-text);
  font-size: 1rem;
}

/* Services Section */
.services-section {
  padding: 8rem 0;
  background-color: white;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.service-card {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.service-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: var(--light-background);
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}

.service-card h3 {
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

.service-card p {
  color: var(--light-text);
  line-height: 1.6;
}

/* Testimonials Section */
.testimonials-section {
  background-color: var(--light-background);
  padding: 8rem 0;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
}

.testimonial-content {
  margin-bottom: 2rem;
}

.testimonial-content p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-color);
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.testimonial-author-info h4 {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  color: var(--secondary-color);
}

.testimonial-author-info p {
  font-size: 0.9rem;
  color: var(--light-text);
}

/* Contact Section */
.contact-section {
  padding: 8rem 0;
  background-color: white;
}

.contact-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: var(--light-text);
  max-width: 700px;
  margin: 0 auto 4rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.contact-card {
  padding: 2.5rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--light-background);
  margin-right: 1.5rem;
  color: var(--primary-color);
  flex-shrink: 0;
}

.contact-item h3 {
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
}

.contact-item p {
  color: var(--light-text);
}

.contact-form-container {
  width: 100%;
}

.contact-form {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
  color: var(--secondary-color);
}

.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--primary-gradient);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 1rem;
  box-shadow: 0 4px 6px rgba(99, 91, 255, 0.2);
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 14px rgba(99, 91, 255, 0.3);
}

.button-icon {
  width: 18px;
  height: 18px;
}

@media (max-width: 992px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .contact-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .about-stats {
    grid-template-columns: 1fr;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .section-header {
    margin-bottom: 3rem;
  }
  
  .hero-section,
  .about-section,
  .services-section,
  .testimonials-section,
  .contact-section {
    padding: 5rem 0;
  }
}
</style>