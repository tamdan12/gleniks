
import $ from "swiper";

var menu = ['Slide 1', 'Slide 2', 'Slide 3']
var mySwiper = new Swiper('.swiper-container', {
    autoHeight: true,
    speed: 500,
    effect: 'fade',
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

