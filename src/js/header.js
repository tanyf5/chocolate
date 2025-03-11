// Scroll + header height

const mobileMenu = document.querySelector('.js-mobile-menu');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');
const closeMenuLinks = document.querySelectorAll('.mobile-menu-item');
const closeMenuSocs = document.querySelectorAll('.soc-item-mob');
const body = document.body;

const toggleMenu = () => {
  const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');
  body.classList.toggle('no-scroll', mobileMenu.classList.contains('is-open'));
};

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

closeMenuLinks.forEach(item => item.addEventListener('click', toggleMenu));
closeMenuSocs.forEach(item => item.addEventListener('click', toggleMenu));
