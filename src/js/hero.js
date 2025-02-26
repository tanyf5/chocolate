function scrollToSection(buttonSelector, targetSection) {
  document
    .querySelector(buttonSelector)
    .addEventListener('click', function (event) {
      event.preventDefault();

      const headerHeight = document.querySelector('header').offsetHeight;
      const section = document.querySelector(targetSection);
      const sectionPosition = section.offsetTop;

      window.scrollTo({
        top: sectionPosition - headerHeight,
        behavior: 'smooth',
      });
    });
}

scrollToSection('.hero-buy-btn', '#products');
scrollToSection('.hero-how-btn', '#process');
scrollToSection('.scroll-down-btn', '#ingredients');
