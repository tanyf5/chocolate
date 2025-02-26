const scrollToSection = event => {
  event.preventDefault();

  const headerHeight = document.querySelector('header').offsetHeight;
  const targetId = event.target.getAttribute('href');
  const targetSection = document.querySelector(targetId);

  if (targetSection) {
    const targetPosition = targetSection.offsetTop - headerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }
};

document.querySelectorAll('.navigation-item').forEach(link => {
  link.addEventListener('click', scrollToSection);
});

document.querySelectorAll('.mobile-menu-item').forEach(link => {
  link.addEventListener('click', scrollToSection);
});

document.querySelectorAll('.footer-menu-item').forEach(link => {
  link.addEventListener('click', scrollToSection);
});

document
  .querySelector('.header-logo-link')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const headerHeight = document.querySelector('header').offsetHeight;
    const nextSection = document.querySelector('#hero');
    const sectionPosition = nextSection.offsetTop;

    window.scrollTo({
      top: sectionPosition - headerHeight,
      behavior: 'smooth',
    });
  });
