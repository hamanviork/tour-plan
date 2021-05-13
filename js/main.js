const swiper = new Swiper('.swiper-container', {
  loop: true,
  effect: 'coverflow',
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
});