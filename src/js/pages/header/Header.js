let menuItem = document.querySelectorAll('.header__nav--list-item');

menuItem.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.classList.toggle('hover');
    });

    item.addEventListener('mouseout', () => {
        item.classList.toggle('hover');
    });
});

const imageSwitch = document.getElementById('imageSwitch');
const body = document.querySelector('body');
const containerApresentation = document.getElementById('container__apresentation');
const containerApresentationTitle = document.querySelector('h2');
const header = document.getElementById('header');
const headerNav = document.querySelector('nav');
const headerNavItem = document.querySelectorAll('a');
const headerTitle = document.querySelector('.header__title');
const containerApresentationImg = document.querySelector('.container__apresentation--images img');

imageSwitch.addEventListener('click', () => {

    body.classList.toggle('darkTheme');
    body.classList.toggle('clearTheme');

    if(body.classList.contains('darkTheme')){
        darkThemeMode();
    } else {
        clearThemeMode();
    };
});

function clearThemeMode() {
    headerNav.style.borderBottom = '1px solid #0D0D0D';
    headerTitle.classList.add('header__clearTheme');
    headerTitle.classList.remove('header__title')
    imageSwitch.src = 'assets/icons/lua-icon.png';
    containerApresentation.style.background = 'linear-gradient(to top, #A6A6A640, #A6A6A605)';
    containerApresentationTitle.style.color = '#0D0D0D';
    containerApresentationImg.style.border = '1px solid #0D0D0D';
    header.style.color = '#0D0D0D';
    header.style.backgroundColor = '#A6A6A6';
    headerNavItem.forEach((item) => {
        item.style.color = '#0D0D0D';
    })
    body.style.backgroundColor = '#A6A6A6';
    body.style.color = '#0D0D0D';
};

function darkThemeMode() {
    headerNav.style.borderBottom = '1px solid white';
    headerTitle.classList.add('header__title')
    headerTitle.classList.remove('header__clearTheme');
    imageSwitch.src = 'assets/icons/sol-icon.png';
    containerApresentation.style.background = 'linear-gradient(to bottom, #26262607, #262626)';
    containerApresentationTitle.style.color = 'white';
    containerApresentationImg.style.border = '1px solid white';
    header.style.color = 'white';
    header.style.backgroundColor = '#262626';
    headerNavItem.forEach((item) => {
        item.style.color = 'white';
    })
    body.style.backgroundColor = '#262626';
    body.style.color = 'white';
};