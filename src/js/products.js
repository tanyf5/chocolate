// Load more btn

const loadMoreBtn = document.querySelector('.load-more-prod-btn');
const allItems = document.querySelectorAll('.products-item');

let visibleItems = 0;
const itemsPerLoad = {
  mobile: 2,
  tablet: 2,
  desktop: 4,
};

function setInitialVisibleItems() {
  visibleItems = itemsPerLoad[getCurrentDevice()];
  showVisibleItems();
}

function loadMoreItems() {
  visibleItems += itemsPerLoad[getCurrentDevice()];
  showVisibleItems();
}

function getCurrentDevice() {
  const width = window.innerWidth;

  if (width <= 767) return 'mobile';
  if (width <= 1199) return 'tablet';
  return 'desktop';
}

function showVisibleItems() {
  allItems.forEach((item, index) => {
    if (index < visibleItems) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });

  if (visibleItems >= allItems.length) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.style.display = 'block';
  }
}

window.addEventListener('resize', () => {
  visibleItems = itemsPerLoad[getCurrentDevice()];
  showVisibleItems();
});

loadMoreBtn.addEventListener('click', loadMoreItems);

setInitialVisibleItems();
