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
      alert(`🍂 Terima kasih sudah mendaftar (${email})! Kami akan segera kirimkan panduan lengkap Haven Jakarta (14–15 November 2026).`);
      heroForm.reset();
    });
  }

  const playBtns = document.querySelectorAll('.pulse-play-icon, .blanket-play-btn');
  playBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      alert('🎬 Memutar video cuplikan keseruan game jam Hack Club Haven!');
    });
  });
});
