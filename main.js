/* ============================================================
   joseruda.com — main.js  v3.0
   1. Nav: transparent → solid on hero exit
   2. Scroll animations: fade-up elements on viewport entry
   ============================================================ */

(function () {
  'use strict';

  /* ── 1. Nav scroll behavior ─────────────────────────────── */
  var nav  = document.querySelector('.site-nav');
  var hero = document.querySelector('#hero');

  if (nav && hero) {
    var heroObserver = new IntersectionObserver(
      function (entries) {
        nav.classList.toggle('scrolled', !entries[0].isIntersecting);
      },
      { threshold: 0.05 }
    );
    heroObserver.observe(hero);
  }

  /* ── 2. Scroll-triggered fade-up animations ─────────────── */
  var targets = document.querySelectorAll('.fade-up');

  if (targets.length > 0 && 'IntersectionObserver' in window) {
    var fadeObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach(function (el) {
      fadeObserver.observe(el);
    });
  } else {
    /* Fallback: show everything immediately if no IntersectionObserver */
    targets.forEach(function (el) {
      el.classList.add('visible');
    });
  }

})();
