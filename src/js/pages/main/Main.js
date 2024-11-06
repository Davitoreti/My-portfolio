window.addEventListener('scroll', () => {
    const containerApresentationImageLeft = document.querySelector('.container__apresentation--image-left');
    const containerApresentationImageRight = document.querySelector('.container__apresentation--image-right');

    const scrollPosition = window.scrollY;

    const rotationDegreeLeft = scrollPosition * 0.4 / Math.min(-50);
    const rotationDegreeRight = scrollPosition * 0.4 / Math.min(50);

    containerApresentationImageLeft.style.transform = `rotate(${rotationDegreeLeft}deg)` 
    containerApresentationImageRight.style.transform = `rotate(${rotationDegreeRight}deg)`

});

// const containerProjectsList = document.querySelector('.container__projects--list');
// const containerProjectsListImages = document.querySelectorAll('.container__projects--list-item')

// let counter = 0;

// function slider() {

//     counter++;

//     const clone = containerProjectsList.cloneNode(true);

//     containerProjectsListImages.forEach((image) => {


//         const moveX = counter * 20;
//         image.style.transform = `translateX(${-moveX}rem)`;
//     })
// }  

const containerProjectsList = document.querySelector('.container__projects--list');
const containerProjectsListImages = document.querySelectorAll('.container__projects--list-item');

let counter = 0; 

function moveSlider() {
    counter++; 

    // Movendo as imagens uma por uma para a esquerda
    containerProjectsListImages.forEach((image) => {
        const moveX =  counter * 20; // Faz o movimento das imagens baseado no contador
        image.style.transform = `translateX(${moveX}rem)`;  // Aplique a transição de movimento
    });
}

setInterval(moveSlider, 3000);