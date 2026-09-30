// ==========================================================================
// MAIN BOOTSTRAP SCRIPT 
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  if (typeof window.initNav === 'function') window.initNav();
  if (typeof window.initSchedule === 'function') window.initSchedule();
  if (typeof window.initFaq === 'function') window.initFaq();
  if (typeof window.initModal === 'function') window.initModal();

  const heroForm = document.getElementById('heroEmailForm');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = heroForm.querySelector('input[type="email"]')?.value || '';
      alert(`🍂 Thank you for registering (${email})! We will send you the complete Haven Jakarta handbook shortly (November 14–15, 2026).`);
      heroForm.reset();
    });
  }

  const playBtns = document.querySelectorAll('.pulse-play-icon, .blanket-play-btn');
  playBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      alert('🎬 Playing recap video highlighting the excitement of Hack Club Haven!');
    });
  });
});
