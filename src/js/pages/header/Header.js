import moonImage from '../../../assets/icons/lua-icon.png';
import sunImage from '../../../assets/icons/sol-icon.png';
import menuIconWhite from '../../../assets/icons/menu-icon-white.png';
import menuIconBlack from '../../../assets/icons/menu-icon-black.png';

let menuItems = document.querySelectorAll('.header__nav--list-item');
const body = document.querySelector('body');

function toggleHoverClass(item) {
    const themeClass = body.classList.contains('darkTheme') ? 'darkTheme' : 'clearTheme';
    const hoverClass = `hover__${themeClass}`;
    item.classList.toggle(hoverClass);
};

export function handleMenuHover() {
    menuItems.forEach((item) => {
        item.addEventListener('mouseover', () => toggleHoverClass(item));
        item.addEventListener('mouseout', () => toggleHoverClass(item));
    });
};

export function handleThemeSwitch() {
    const body = document.querySelector('body');
    const header = document.getElementById('header');
    const headerNav = document.getElementById('header__nav');
    const headerNavItem = document.querySelectorAll('a');
    const headerNavList = document.querySelector('.header__nav--list');
    const headerButton = document.querySelector('.header__nav--button img');
    const headerTitle = document.querySelector('.header__darkTheme-title');
    const imageSwitch = document.getElementById('imageSwitch');
    const containerApresentation = document.getElementById('container__apresentation');
    const containerApresentationImages = document.querySelectorAll('.container__apresentation img');
    const containerAboutMyselfImages = document.querySelectorAll('.container__about--mySelf img');
    const containerExperienceImages = document.querySelectorAll('.container__experience img');
    const containerPerspectiveImages = document.querySelectorAll('.container__perspective img');
    const containerApresentationTitle = document.querySelector('h2');
    const footerSection = document.querySelector('.footer__section');

    function toggleTheme() {
        body.classList.toggle('darkTheme');
        body.classList.toggle('clearTheme');

        if (body.classList.contains('darkTheme')) {
            darkThemeMode();
        } else {
            clearThemeMode();
        };
    };

    imageSwitch.addEventListener('click', toggleTheme);

    imageSwitch.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter') {
            ev.preventDefault();
            toggleTheme();
        };
    });

    function clearThemeMode() {
        const clearElements = [
            { element: headerNav, styles: { borderBottom: '1px solid #0D0D0D', backgroundColor: '#A6A6A6' } },
            { element: headerButton, styles: { backgroundColor: '#A6A6A6' }, src: menuIconBlack },
            { element: headerTitle, addClass: 'header__clearTheme-title', removeClass: 'header__darkTheme-title' },
            { element: imageSwitch, src: moonImage, alt: 'tema claro' },
            { element: containerApresentation, styles: { background: 'linear-gradient(to top, #A6A6A640, #A6A6A605)' } },
            { element: containerApresentationTitle, styles: { color: '#0D0D0D' } },
            { element: header, styles: { color: '#0D0D0D', backgroundColor: '#A6A6A6' } },
            { element: body, styles: { backgroundColor: '#A6A6A6', color: '#0D0D0D' } },
            { element: footerSection, styles: { borderTop: '1px solid #0D0D0D' } }
        ];

        clearElements.forEach(item => {
            if (item.styles) {
                Object.assign(item.element.style, item.styles);
            }
            if (item.src) {
                item.element.src = item.src;
            }
            if (item.alt) {
                item.element.setAttribute('alt', item.alt);
            }
            if (item.addClass) {
                item.element.classList.add(item.addClass);
            }
            if (item.removeClass) {
                item.element.classList.remove(item.removeClass);
            }
        });

        if (window.innerWidth <= 712) {
            headerNavList.style.backgroundColor = '#888888';
            headerNavList.style.borderTop = '1px solid #0D0D0D';
            headerNavList.style.borderBottom = '1px solid #0D0D0D';
        };

        const imageContainers = [
            containerApresentationImages,
            containerAboutMyselfImages,
            containerExperienceImages,
            containerPerspectiveImages
        ];

        imageContainers.forEach(container => {
            container.forEach(image => {
                image.style.border = '1px solid #0D0D0D';
            });
        });

        headerNavItem.forEach(item => {
            item.style.color = '#0D0D0D';
        });
    };

    function darkThemeMode() {
        const darkElements = [
            { element: headerNav, styles: { borderBottom: '1px solid white', backgroundColor: '#262626' } },
            { element: headerButton, styles: { backgroundColor: '#262626' }, src: menuIconWhite },
            { element: headerTitle, addClass: 'header__darkTheme-title', removeClass: 'header__clearTheme-title' },
            { element: imageSwitch, src: sunImage, alt: 'tema escuro' },
            { element: containerApresentation, styles: { background: 'linear-gradient(to bottom, #26262607, #262626)' } },
            { element: containerApresentationTitle, styles: { color: 'white' } },
            { element: header, styles: { color: 'white', backgroundColor: '#262626' } },
            { element: body, styles: { backgroundColor: '#262626', color: 'white' } },
            { element: footerSection, styles: { borderTop: '1px solid white' } }
        ];

        darkElements.forEach(item => {
            if (item.styles) {
                Object.assign(item.element.style, item.styles);
            };
            if (item.src) {
                item.element.src = item.src;
            };
            if (item.alt) {
                item.element.setAttribute('alt', item.alt);
            };
            if (item.addClass) {
                item.element.classList.add(item.addClass);
            };
            if (item.removeClass) {
                item.element.classList.remove(item.removeClass);
            };
        });

        if (window.innerWidth <= 712) {
            headerNavList.style.backgroundColor = '#333';
            headerNavList.style.borderTop = '1px solid white';
            headerNavList.style.borderBottom = '1px solid white';
        };

        const imageContainers = [
            containerApresentationImages,
            containerAboutMyselfImages,
            containerExperienceImages,
            containerPerspectiveImages
        ];

        imageContainers.forEach(container => {
            container.forEach(image => {
                image.style.border = '1px solid white';
            });
        });

        headerNavItem.forEach(item => {
            item.style.color = 'white';
        });
    };
};

export function handleMenuDropDown() {
    const headerNavButton = document.querySelector('.header__nav--button');
    const headerNavList = document.querySelector('.header__nav--list');

    headerNavList.style.visibility = 'hidden';

    headerNavButton.addEventListener('click', () => {
        if (headerNavList.style.visibility === 'visible') {
            headerNavList.style.visibility = 'hidden';
        } else {
            headerNavList.style.visibility = 'visible';
        };
    });

    function handleScreenSize(element, event) {
        element.addEventListener(`${event}`, () => {
            if (element.innerWidth <= 712) {
                headerNavButton.style.visibility = 'visible';
                headerNavList.style.visibility = 'hidden';
            } else {
                headerNavButton.style.visibility = 'hidden';
                headerNavList.style.visibility = 'visible';
            };
        });
    };

    handleScreenSize(window, 'resize');
    handleScreenSize(window, 'DOMContentLoaded');
};

export default {
    handleMenuHover,
    handleThemeSwitch,
    handleMenuDropDown
};