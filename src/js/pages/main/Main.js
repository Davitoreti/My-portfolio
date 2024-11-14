import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

   new Swiper('.swiper-container', {
    loop: true,
    speed: 2000,
    grabCursor: true,
    autoplay: {
      delay: 2000,
    },
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

window.addEventListener('scroll', () => {
    const containerApresentationImageLeft = document.querySelector('.container__apresentation--image-left');
    const containerApresentationImageRight = document.querySelector('.container__apresentation--image-right');

    const scrollPosition = window.scrollY;

    const rotationDegreeLeft = scrollPosition * 0.4 / Math.min(-50);
    const rotationDegreeRight = scrollPosition * 0.4 / Math.min(50);

    containerApresentationImageLeft.style.transform = `rotate(${rotationDegreeLeft}deg)` 
    containerApresentationImageRight.style.transform = `rotate(${rotationDegreeRight}deg)`

});