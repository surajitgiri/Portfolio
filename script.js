/**
 * Portfolio JavaScript Functionality
 * Handles theme toggling, sticky navigation, scroll animations, active section detection, and contact form handling.
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initScrollEffects();
  initIntersectionObserver();
  initContactForm();
  initLiveClock();
});

/* Live Clock Function for Profile Card */
function initLiveClock() {
  const clockEl = document.getElementById('live-time-clock');
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // hour '0' should be '12'
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    const hoursStr = hours < 10 ? '0' + hours : hours;
    
    clockEl.textContent = `${hoursStr}:${minutesStr} ${ampm}`;
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* ==========================================================================
   1. Dark / Light Theme Toggle
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const sunIcons = document.querySelectorAll('.theme-sun-icon');
  const moonIcons = document.querySelectorAll('.theme-moon-icon');

  function updateThemeIcons(isDark) {
    sunIcons.forEach(icon => icon.classList.toggle('hidden', !isDark));
    moonIcons.forEach(icon => icon.classList.toggle('hidden', isDark));
  }

  // Check initial state applied by head script
  const isDarkMode = document.documentElement.classList.contains('dark');
  updateThemeIcons(isDarkMode);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Rotate effect
      btn.classList.add('rotate-on-click');
      setTimeout(() => btn.classList.remove('rotate-on-click'), 400);

      const CurrentlyDark = document.documentElement.classList.contains('dark');
      if (CurrentlyDark) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        updateThemeIcons(false);
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        updateThemeIcons(true);
      }
    });
  });
}

/* ==========================================================================
   2. Mobile Hamburger Menu
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  function toggleMenu(show) {
    const isExpanded = show !== undefined ? show : mobileMenu.classList.contains('hidden');
    if (isExpanded) {
      mobileMenu.classList.remove('hidden');
      menuBtn.setAttribute('aria-expanded', 'true');
    } else {
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  }

  menuBtn.addEventListener('click', () => toggleMenu());

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close menu on click outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
      toggleMenu(false);
    }
  });
}

/* ==========================================================================
   3. Scroll Effects & Navbar Shadow
   ========================================================================== */
function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar Shadow on Scroll
    if (navbar) {
      if (scrollY > 20) {
        navbar.classList.add('shadow-md', 'border-opacity-100');
        navbar.classList.remove('py-4');
        navbar.classList.add('py-3');
      } else {
        navbar.classList.remove('shadow-md');
        navbar.classList.remove('py-3');
        navbar.classList.add('py-4');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   4. Reveal Animations & Page Navigation Active State
   ========================================================================== */
function initIntersectionObserver() {
  // 4a. Reveal animation on scroll & immediate initial load check
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -20px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
    // Instantly reveal elements that are already visible in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      el.classList.add('active');
    }
  });

  // 4b. Highlight Active Navigation Link based on current page URL
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  navLinks.forEach(link => {
    const href = (link.getAttribute('href') || '').toLowerCase();
    
    if (path.includes('/about') || hash === '#about') {
      if (href.includes('about')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    } else if (path.includes('/contact') || hash === '#contact') {
      if (href.includes('contact')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    } else {
      if (href === '/' || href === '/index.html' || href === '#hero' || href === '#') {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}

/* ==========================================================================
   5. Contact Form Validation & EmailJS Simulation / Integration
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit-btn');

  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('user_name');
    const emailInput = document.getElementById('user_email');
    const messageInput = document.getElementById('user_message');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Validation
    if (!name || !email || !message) {
      showFormStatus('Please fill in all fields before sending.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormStatus('Please provide a valid email address.', 'error');
      return;
    }

    // Show Loading state
    setSubmitBtnLoading(true);

    try {
      // If EmailJS is loaded globally via CDN and configured
      if (window.emailjs && window.emailjs.sendForm) {
        await window.emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm);
      } else {
        // Fallback simulation for demonstration
        await new Promise(resolve => setTimeout(resolve, 1200));
      }

      showFormStatus('Thank you! Your message has been sent successfully. I will get back to you soon.', 'success');
      contactForm.reset();
    } catch (err) {
      console.error('Email send error:', err);
      showFormStatus('Failed to send message. Please try emailing directly at alex.rivera.dev@gmail.com.', 'error');
    } finally {
      setSubmitBtnLoading(false);
    }
  });

  function setSubmitBtnLoading(isLoading) {
    if (!submitBtn) return;
    if (isLoading) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
      `;
    } else {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <span>Send Message</span>
        <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
        </svg>
      `;
    }
  }

  function showFormStatus(msg, type) {
    if (!formStatus) return;
    formStatus.textContent = msg;
    formStatus.classList.remove('hidden', 'bg-emerald-500/10', 'text-emerald-600', 'dark:text-emerald-400', 'bg-rose-500/10', 'text-rose-600', 'dark:text-rose-400');

    if (type === 'success') {
      formStatus.classList.add('bg-emerald-500/10', 'text-emerald-600', 'dark:text-emerald-400');
    } else {
      formStatus.classList.add('bg-rose-500/10', 'text-rose-600', 'dark:text-rose-400');
    }

    setTimeout(() => {
      formStatus.classList.add('hidden');
    }, 6000);
  }
}
