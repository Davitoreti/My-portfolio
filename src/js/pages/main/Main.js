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
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1660: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1920: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      2560: {
        slidesPerView: 6,
        spaceBetween: 10,
      }
    }
  });

  setInterval(() => {
    swiper.slideNext();
  }, 2000);

 function debounce(func, wait) {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  };
  
  export function handleRotation() {
    const containerApresentationImageLeft = document.querySelector('.container__apresentation--image-left');
    const containerApresentationImageRight = document.querySelector('.container__apresentation--image-right');
  
    if(window.innerWidth > 768) {
      const scrollPosition = window.scrollY;
      const rotationDegreeLeft = scrollPosition * 0.3 / 90;
      const rotationDegreeRight = scrollPosition * 0.3 / 90;
  
      containerApresentationImageLeft.style.transform = `rotate(-${rotationDegreeLeft}deg)`;
      containerApresentationImageRight.style.transform = `rotate(${rotationDegreeRight}deg)`;
    } else {
      containerApresentationImageLeft.style.transform = '';
      containerApresentationImageRight.style.transform = '';
    };
  };

  export function renderIconsAcademicStatus() {
    const images = document.querySelectorAll('.container__academicStatus--image');
  
    if(window.innerWidth <= 768) {
      images.forEach(image => image.classList.add('small'));
    } else {
      images.forEach(image => image.classList.remove('small'));
    };
  };
  
  const optimizedHandleRotation = debounce(handleRotation, 200); 
  const optimizedRenderImagesContainerAcademicStatus = debounce(renderIconsAcademicStatus, 200);
  
  window.addEventListener('resize', optimizedHandleRotation);
  window.addEventListener('resize', optimizedRenderImagesContainerAcademicStatus);
  window.addEventListener('scroll', handleRotation);