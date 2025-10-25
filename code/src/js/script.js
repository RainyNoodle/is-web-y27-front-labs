import "/src/sass/style.scss";
// import Swiper JS
import Swiper from 'swiper';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,

    breakpoints: {
        770: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: true,
        }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

swiper.on('slideChange', function () {
    console.log('slide changed');
});

const menu = document.querySelector('.menu');

console.log(menu);

document.querySelector('.burger').addEventListener('click', function () {
    menu.classList.add('menu--active');
});

const menuClose = document.querySelector('.menu__close');

menuClose.addEventListener('click', function () {
    menu.classList.remove('menu--active');
});

