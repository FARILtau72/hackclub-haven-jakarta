// ==========================================================================
// NAVIGATION DRAWER LOGIC (Max < 200 Lines)
// ==========================================================================

function initNav() {
  const burger = document.getElementById('mobileBurger');
  const drawer = document.getElementById('mobileDrawer');
  const links = document.querySelectorAll('.mobile-nav-drawer .mob-link');

  if (!burger || !drawer) return;

  burger.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    } else {
      drawer.classList.add('open');
      burger.setAttribute('aria-expanded', 'true');
    }
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

window.initNav = initNav;
