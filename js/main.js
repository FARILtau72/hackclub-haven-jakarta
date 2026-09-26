// ==========================================================================
// MAIN BOOTSTRAP SCRIPT (Max < 200 Lines)
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
      alert(`🍂 Thanks for signing up (${email})! We'll send you Haven details for November 14–15, 2026.`);
      heroForm.reset();
    });
  }

  const playBtns = document.querySelectorAll('.pulse-play-icon, .blanket-play-btn');
  playBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      alert('🎬 Loading Haven Game Jam Highlights video!');
    });
  });
});
