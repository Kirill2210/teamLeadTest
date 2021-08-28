const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerGroup: 3,
  slidesPerView: 3,
  autoHeight: true,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  }
});