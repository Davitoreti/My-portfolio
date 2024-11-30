import moonImage from '../../../assets/icons/lua-icon.png';
import sunImage from '../../../assets/icons/sol-icon.png';

let menuItem = document.querySelectorAll('.header__nav--list-item');
export function handleMenuHover() {

    menuItem.forEach((item) => {
        const body = document.querySelector('body');
        item.addEventListener('mouseover', () => {
            if(body.classList.contains('darkTheme')){
                item.classList.toggle('hover__darkTheme');
            } else {
                item.classList.toggle('hover__clearTheme');
            }
        });

        item.addEventListener('mouseout', () => {
            if(body.classList.contains('darkTheme')){
                item.classList.toggle('hover__darkTheme');
            } else {
                item.classList.toggle('hover__clearTheme');
            }
        });
    });
};

export function handleTabNavigation() {

    menuItem.forEach((item, index) => {
        item.setAttribute('tabindex', index + 1); 
    });

    document.addEventListener('keydown', (ev) => {
        if (ev.key === 'Tab') {
            const focusedElement = document.activeElement;

            if (focusedElement === menuItem[menuItem.length - 1] && ev.shiftKey === false) {
                const firstContentSection = document.querySelector('header_title');
                firstContentSection && firstContentSection.focus();
            }
        }
    });
};

export function handleThemeSwitch() {
    const body = document.querySelector('body');
    const imageSwitch = document.getElementById('imageSwitch');
    const containerApresentation = document.getElementById('container__apresentation');
    const containerApresentationImages = document.querySelectorAll('.container__apresentation img');
    const containerAboutMyselfImages = document.querySelectorAll('.container__about--mySelf img');
    const containerExperienceImages = document.querySelectorAll('.container__experience img');
    const containerPerspectiveImages = document.querySelectorAll('.container__perspective img');
    const containerApresentationTitle = document.querySelector('h2');
    const header = document.getElementById('header');
    const headerNav = document.getElementById('header__nav');
    const headerNavItem = document.querySelectorAll('a');
    const headerTitle = document.querySelector('.header__title');
    const footerSection = document.querySelector('.footer__section');

    imageSwitch.addEventListener('click', () => {
        toggleTheme();
    });

    imageSwitch.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter') {
            ev.preventDefault(); 
            toggleTheme();
        }
    });

    function toggleTheme() {
        body.classList.toggle('darkTheme');
        body.classList.toggle('clearTheme');

        if (body.classList.contains('darkTheme')) {
            darkThemeMode();
        } else {
            clearThemeMode();
        }
    }
    function clearThemeMode() {
        headerNav.style.borderBottom = '1px solid #0D0D0D';
        headerNav.style.backgroundColor = '#A6A6A6';
        headerTitle.classList.add('header__clearTheme-title');
        headerTitle.classList.remove('header__title');
        imageSwitch.src = moonImage;
        imageSwitch.setAttribute('alt', 'tema claro');
        containerApresentation.style.background = 'linear-gradient(to top, #A6A6A640, #A6A6A605)';
        containerApresentationTitle.style.color = '#0D0D0D';
        header.style.color = '#0D0D0D';
        header.style.backgroundColor = '#A6A6A6';
        headerNavItem.forEach((item) => {
            item.style.color = '#0D0D0D';
        });
        body.style.backgroundColor = '#A6A6A6';
        body.style.color = '#0D0D0D';
        containerApresentationImages.forEach((image) => {
            image.style.border = '1px solid #0D0D0D'
        });
        containerAboutMyselfImages.forEach((image) => {
            image.style.border = '1px solid #0D0D0D'
        });
        containerExperienceImages.forEach((image) => {
            image.style.border = '1px solid #0D0D0D'
        });
        containerPerspectiveImages.forEach((image) => {
            image.style.border = '1px solid #0D0D0D'
        });
        footerSection.style.borderTop = '1px solid #0D0D0D';
    };

    function darkThemeMode() {
        headerNav.style.borderBottom = '1px solid white';
        headerNav.style.backgroundColor = '#262626';
        headerTitle.classList.add('header__title');
        headerTitle.classList.remove('header__clearTheme-title');
        imageSwitch.src = sunImage;
         imageSwitch.setAttribute('alt', 'tema escuro');
        containerApresentation.style.background = 'linear-gradient(to bottom, #26262607, #262626)';
        containerApresentationTitle.style.color = 'white';
        header.style.color = 'white';
        header.style.backgroundColor = '#262626';
        headerNavItem.forEach((item) => {
            item.style.color = 'white';
        });
        body.style.backgroundColor = '#262626';
        body.style.color = 'white';
        containerApresentationImages.forEach((image) => {
            image.style.border = '1px solid white'
        });
        containerAboutMyselfImages.forEach((image) => {
            image.style.border = '1px solid white'
        });
        containerExperienceImages.forEach((image) => {
            image.style.border = '1px solid white'
        });
        containerPerspectiveImages.forEach((image) => {
            image.style.border = '1px solid white'
        });
        footerSection.style.borderTop = '1px solid white';
    };
};

export function handleMenuDropDown() {
    const menuDropDown = document.getElementById('navbar');
    const headerNav = document.getElementById('header__nav');

    if(window.innerWidth <= 768) {
        menuDropDown.style.display = 'flex';
        headerNav.style.display = 'none';
    } else {
        menuDropDown.style.display = 'none';
        headerNav.style.display = 'flex';
    }
};

export default {
    handleMenuHover,
    handleThemeSwitch,
    handleTabNavigation,
    handleMenuDropDown
};