// ==========================================================================
// STORYBOOK SIGNUP MODAL LOGIC (Max < 200 Lines)
// ==========================================================================

function initModal() {
  const modal = document.getElementById('signupModal');
  const closeBtn = document.getElementById('closeSignupModal');
  const leadForm = document.getElementById('leadJamForm');
  const drawer = document.getElementById('mobileDrawer');

  const openBtns = [
    document.getElementById('openMainModal'),
    document.getElementById('drawerSignupBtn')
  ].filter(Boolean);

  const openModal = (e) => {
    if (e) e.preventDefault();
    if (!modal) return;

    if (drawer) drawer.classList.remove('open');
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      const firstInput = modal.querySelector('input');
      if (firstInput) firstInput.focus();
    }, 100);
  };

  const closeModal = () => {
    if (!modal) return;
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  };

  openBtns.forEach((btn) => btn.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });

  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('leadName')?.value || 'Hacker';
      const school = document.getElementById('leadCity')?.value || 'Jakarta';
      const role = document.getElementById('leadRole')?.value || 'Game Maker';

      alert(`🎉 Hooray, ${name}! Your registration for Haven Jakarta (November 14–15, 2026) as ${role} from ${school} has been submitted! We have sent the event handbook and ticket details to your email.`);
      leadForm.reset();
      closeModal();
    });
  }
}

window.initModal = initModal;
