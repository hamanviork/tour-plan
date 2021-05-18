var swiper1 = new Swiper('.swiper-container', {
  loop: true,
  effect: 'coverflow',
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
});

const swiper2 = new Swiper('.reviews-slider', {
  loop: true,
  effect: 'coverflow',
  navigation: {
    nextEl: '.reviews-btns__button_next',
    prevEl: '.reviews-btns__button_prev',
  },});