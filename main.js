function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  const btn = document.getElementById('hamburger');
  const isOpen = nav.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMobileNav() {
  const nav = document.getElementById('mobile-nav');
  const btn = document.getElementById('hamburger');
  nav.classList.remove('open');
  btn.classList.remove('open');
  document.body.style.overflow = '';
}

// Close mobile nav on resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 700) closeMobileNav();
});