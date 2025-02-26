import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
