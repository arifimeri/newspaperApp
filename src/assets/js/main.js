(function () {
  "use strict";

  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader) return;
    if (
        !selectHeader.classList.contains('scroll-up-sticky') &&
        !selectHeader.classList.contains('sticky-top') &&
        !selectHeader.classList.contains('fixed-top')
    )
      return;
    window.scrollY > 100
        ? selectBody.classList.add('scrolled')
        : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    const body = document.querySelector('body');
    if (!mobileNavToggleBtn || !body) return;
    body.classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  const navLinks = document.querySelectorAll('#navmenu a');
  if (navLinks.length > 0) {
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
    });
  }

  const dropdownToggles = document.querySelectorAll('.navmenu .toggle-dropdown');
  if (dropdownToggles.length > 0) {
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        this.parentNode?.classList.toggle('active');
        this.parentNode?.nextElementSibling?.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });
  }

  // Preloader
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  const scrollTop = document.querySelector('.scroll-top');
  function toggleScrollTop() {
    if (!scrollTop) return;
    window.scrollY > 100
        ? scrollTop.classList.add('active')
        : scrollTop.classList.remove('active');
  }

  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  function aosInit() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });
    }
  }
  window.addEventListener('load', aosInit);

  function initSwiper() {
    if (typeof Swiper !== 'undefined') {
      document.querySelectorAll('.init-swiper').forEach(function (swiperElement) {
        const configEl = swiperElement.querySelector('.swiper-config');
        if (!configEl) return;
        let config = {};
        try {
          config = JSON.parse(configEl.innerHTML.trim());
        } catch (e) {
          console.error('Invalid swiper config JSON');
        }

        new Swiper(swiperElement, config);
      });
    }
  }
  window.addEventListener('load', initSwiper);
})();
