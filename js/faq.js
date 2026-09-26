// ==========================================================================
// CARROT PATCH FAQ ACCORDION LOGIC (Max < 200 Lines)
// ==========================================================================

function initFaq() {
  const faqPanels = document.querySelectorAll('.faq-wood-panel');

  faqPanels.forEach((panel) => {
    const btn = panel.querySelector('.faq-panel-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isAlreadyActive = panel.classList.contains('active');

      faqPanels.forEach((other) => {
        other.classList.remove('active');
        const otherBtn = other.querySelector('.faq-panel-btn');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      if (!isAlreadyActive) {
        panel.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

window.initFaq = initFaq;
