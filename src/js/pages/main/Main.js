window.addEventListener('scroll', () => {
    const containerApresentationImageLeft = document.querySelector('.container__apresentation--image-left');
    const containerApresentationImageRight = document.querySelector('.container__apresentation--image-right');

    const scrollPosition = window.scrollY;

    const rotationDegreeLeft = scrollPosition * 0.4 / Math.min(-50);
    const rotationDegreeRight = scrollPosition * 0.4 / Math.min(50);

    containerApresentationImageLeft.style.transform = `rotate(${rotationDegreeLeft}deg)` 
    containerApresentationImageRight.style.transform = `rotate(${rotationDegreeRight}deg)`

});

const containerProjectsList = document.querySelector('.container__projects--list');
const containerProjectsListImages = document.querySelectorAll('.container__projects--list-item');

let isMouseDown = false;

containerProjectsList.addEventListener('mousedown', () => {
    isMouseDown = true;
    containerProjectsList.style.cursor = 'grabbing'
})

containerProjectsList.addEventListener('mouseup', () => {
    isMouseDown = false;
    containerProjectsList.style.cursor = 'grab'
})

containerProjectsList.addEventListener('mousemove', (ev) => {
    if(isMouseDown) {
        ev.clientX
    }
})

let counter = 0; 

function moveSlider() {
    counter++;
  
    const imagesClone = containerProjectsList.cloneNode(true);
  
    containerProjectsListImages.forEach((image) => {
      const moveX = counter * 10;
      image.style.transform = `translateX(${moveX}rem)`;
    });

    if(counter >= containerProjectsListImages.length -1){
        counter = 0;
        containerProjectsList.forEach((image) => {
            const moveX = counter * 10;
            image.style.transform = `translateX(${moveX}rem)`;
        })
    }
  }

setInterval(moveSlider, 3000);