import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Swiper

const swiperContainer = document.querySelector('.swiper');

const swiper = new Swiper(swiperContainer, {
  direction: 'horizontal',
  modules: [Navigation],
  speed: 400,
  loop: true,

  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: false,
  effect: 'slide',
});

// Modal

const reviewForm = document.querySelector('.review-form');
const modal = document.querySelector('#reviews-modal');
const modalBackdrop = document.querySelector('.reviews-modal-backdrop');
const modalClose = document.querySelector('.close-review-modal');
const openModalBtn = document.querySelector('.leave-review-btn');
const thankWrapper = document.querySelector('.thank-wrapper');
const thankBackdrop = document.querySelector('.thank-modal-backdrop');
const closeThankModal = document.querySelector('.close-review-thank-modal');
const body = document.body;

// Open modal
function openModal() {
  modal.style.display = 'flex';
  modalBackdrop.style.display = 'block';
  body.classList.add('no-scroll');
}

// Close modal
function closeModal() {
  modal.style.display = 'none';
  modalBackdrop.style.display = 'none';
  body.classList.remove('no-scroll');
}

// Open Thanking meessage
function showThankYou() {
  thankWrapper.style.display = 'flex';
  thankBackdrop.style.display = 'block';
  body.classList.add('no-scroll');
}

// Close Thanking meessage
function closeThankYou() {
  thankWrapper.style.display = 'none';
  thankBackdrop.style.display = 'none';
  body.classList.remove('no-scroll');
}

// addEventListeners

openModalBtn.addEventListener('click', openModal);

modalClose.addEventListener('click', closeModal);

modalBackdrop.addEventListener('click', closeModal);

closeThankModal.addEventListener('click', closeThankYou);

thankBackdrop.addEventListener('click', closeThankYou);

// addEventListener for Send btn
reviewForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Collect data
  const userName = reviewForm.elements['user-name'].value;
  const userEmail = reviewForm.elements['user-email'].value;
  const userTel = reviewForm.elements['user-tel'].value;
  const userComment = reviewForm.elements['user-comment'].value;
  const termsAccepted = reviewForm.querySelector('.form-checkbox').checked;

  // Data to console
  console.log('Name:', userName);
  console.log('Email:', userEmail);
  console.log('Phone:', userTel);
  console.log('Comment:', userComment);
  console.log('Terms accepted:', termsAccepted);

  closeModal();

  setTimeout(showThankYou, 300);

  reviewForm.reset();
});
