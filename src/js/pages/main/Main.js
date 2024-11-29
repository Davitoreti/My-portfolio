import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

   const swiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 2000,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 100,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    }
  });

  setInterval(() => {
    swiper.slideNext();
  }, 2000);

export function handleRotation() {

  const containerApresentationImageLeft = document.querySelector('.container__apresentation--image-left');
  const containerApresentationImageRight = document.querySelector('.container__apresentation--image-right');

  if(window.innerHeight >= 768) {
    const scrolly = window.scrollY;

    const rotation = scrolly / 2;

    containerApresentationImageLeft.style.transform = `rotate(${rotation}deg)`;
    containerApresentationImageRight.style.transform = `rotate(${rotation}deg)`;
  } else {
    containerApresentationImageLeft.style.transform = `rotate(0deg)`; 
    containerApresentationImageRight.style.transform = `rotate(0deg)`;
  }
 }

 window.addEventListener('scroll', handleRotation);
 window.addEventListener('resize', handleRotation);