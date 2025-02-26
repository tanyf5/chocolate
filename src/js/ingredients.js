// Random colors for each <li></li>

document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('.ingredients-item');

  const colors = ['ingredients-item-black', 'ingredients-item-orange'];

  listItems.forEach(item => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    item.classList.add(randomColor);
  });
});

// Open Content

const arrows = document.querySelectorAll('.ingredients-arrow');
const contentWrappers = document.querySelectorAll(
  '.ingredients-content-wrapper'
);

arrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    const contentWrapper = arrow
      .closest('.ingredients-item')
      .querySelector('.ingredients-content-wrapper');

    contentWrapper.classList.toggle('show');
  });
});

contentWrappers.forEach(wrapper => {
  wrapper.addEventListener('click', () => {
    wrapper.classList.toggle('show');
  });
});

// Load more btn

const loadMoreBtn = document.querySelector('.load-more-btn');
const allItems = document.querySelectorAll('.ingredients-item');

let visibleItems = 2;
const itemsPerLoad = {
  mobile: 2,
  tablet: 2,
  desktop: 4,
};

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

showVisibleItems();
