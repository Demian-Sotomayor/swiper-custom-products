// Initialize Swiper
var swiper = new Swiper(".swiper-custom", {
    direction: 'vertical',
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  
  var swiper2 = new Swiper(".swiper2-custom", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
  
  // Adjust swiper direction on window resize
  function adjustSwiperDirection() {
    if (window.innerWidth <= 768) {
      swiper.changeDirection('horizontal');
    } else {
      swiper.changeDirection('vertical');
    }
  }
  
  // Initialize direction adjustment
  adjustSwiperDirection();
  
  // Add event listener for window resize
  window.addEventListener('resize', adjustSwiperDirection);
  