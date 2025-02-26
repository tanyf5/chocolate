document
  .querySelector('.scroll-down-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const headerHeight = document.querySelector('header').offsetHeight;
    const nextSection = document.querySelector('#ingredients');
    const sectionPosition = nextSection.offsetTop;

    window.scrollTo({
      top: sectionPosition - headerHeight,
      behavior: 'smooth',
    });
  });
