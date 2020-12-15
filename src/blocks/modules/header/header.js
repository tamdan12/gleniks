import $ from "jquery"

'use strict'

//burger
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__list'),
        menuItem = document.querySelectorAll('.header__link'),
        hamburger = document.querySelector('.header__burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('burger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

// slowScroll
if (document.querySelectorAll('a[href*="#"]')) {
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}

// header__link_active

if (document.documentElement.clientWidth <= 1260) {
    $(document).ready(function () {
        let href = location.href
    
        if (href == 'https://borisslonov.github.io/gleniks/dist/page-catalog.html') {
            $('.header__link_1').addClass('header__link_active');
        }
    
        if (href == 'https://borisslonov.github.io/gleniks/dist/page-partners.html') {
            $('.header__link_2').addClass('header__link_active');
        }
    
    
    
        if (href == 'https://borisslonov.github.io/gleniks/dist/page-delivery.html') {
            $('.header__link_3').addClass('header__link_active');
        }
    
    
        if (href == 'https://borisslonov.github.io/hi-fi/dist/page-contacts.html') {
            $('.header__link_4').addClass('header__link_active');
        }
    
    })
}





//add class on scroll
document.addEventListener("scroll", (e) => {

    const content = document.querySelector("body");
    let scrolled = document.scrollingElement.scrollTop;
    let position = content.offsetTop;
    let header = document.querySelector("header");

    if (scrolled > position + 50) {
        content.classList.add('header-bgc');
    } else {
        content.classList.remove('header-bgc');
        content.classList.add('header-none-bgc');
    }
});




let btnScrollDown = document.querySelector('#scroll_down');

if (btnScrollDown) {
    (function () {

        let btnScrollDown = document.querySelector('#scroll_down');

        function scrollDown() {
            let windowCoords = document.documentElement.clientHeight;
            (function scroll() {
                if (window.pageYOffset < windowCoords) {
                    window.scrollBy(0, 10);
                    setTimeout(scroll, 0);
                }
                if (window.pageYOffset > windowCoords) {
                    window.scrollTo(0, windowCoords);
                }
            })();
        }

        btnScrollDown.addEventListener('click', scrollDown);
    })();
}






window.onload = function TypeText() {

    new Typed('#typed1', {
        strings: ['неломких ^3000', 'крепких ^3000', 'премиальных ^3000', 'УНИКАЛЬНЫХ ^3000'],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
        startDelay: 2000,
        cursorChar: ''
    });
}