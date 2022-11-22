import Swiper, { Navigation, Pagination } from 'swiper';

new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
