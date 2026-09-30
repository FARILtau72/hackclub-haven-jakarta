// ==========================================================================
// CARROT PATCH FAQ ACCORDION LOGIC (Max < 200 Lines)
// ==========================================================================

function initFaq() {
  const items = document.querySelectorAll('.faq-accordion-item');
  if (!items.length) return;

  items.forEach((item) => {
    const btn = item.querySelector('.faq-pill-btn');
    if (!btn) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = item.classList.contains('active');

      // Close other accordion drawers
      items.forEach((other) => {
        if (other !== item) {
          other.classList.remove('active');
          const otherBtn = other.querySelector('.faq-pill-btn');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.faq-accordion-item')) {
      items.forEach((item) => {
        item.classList.remove('active');
        const btn = item.querySelector('.faq-pill-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });
}

// Auto-run or export
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFaq);
} else {
  initFaq();
}

window.initFaq = initFaq;
