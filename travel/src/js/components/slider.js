import Swiper from 'swiper';

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 80,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});