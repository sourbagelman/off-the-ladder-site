// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.mobile-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.style.display === 'block';
    menu.style.display = open ? 'none' : 'block';
    toggle.setAttribute('aria-expanded', String(!open));
  });
}
