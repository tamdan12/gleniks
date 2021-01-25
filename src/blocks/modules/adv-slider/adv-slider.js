
import $ from "swiper";


var mySwiper = new Swiper('.swiper-container', {
    autoHeight: true,
    speed: 500,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

var mobSwiper = new Swiper('.swiper-container-mobile', {
    autoHeight: true,
    speed: 500,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

// mob-swiper__slide_1 swiper-slide-active

mobSwiper.on('slideChange', function () {
    let i = this.realIndex

    console.log(i)

    if (i == 0) {
        document.querySelector('.bed-dot_1').classList.add('dot-active')
    } else {
        document.querySelector('.bed-dot_1').classList.remove('dot-active')
    }

    if (i == 1) {
        document.querySelector('.bed-dot_7').classList.add('dot-active')
    } else {
        document.querySelector('.bed-dot_7').classList.remove('dot-active')
    }

    if (i == 2) {
        document.querySelector('.bed-dot_10').classList.add('dot-active')
    } else {
        document.querySelector('.bed-dot_10').classList.remove('dot-active')
    }

    if (i == 3) {
        document.querySelector('.bed-dot_8').classList.add('dot-active')
    } else {
        document.querySelector('.bed-dot_8').classList.remove('dot-active')
    }

    if (i == 4) {
        document.querySelector('.bed-dot_2').classList.add('dot-active')
    } else {
        document.querySelector('.bed-dot_2').classList.remove('dot-active')
    }

    if (i == 5) {
        document.querySelector('.bed-dot_9').classList.add('dot-active')
    } else {
        document.querySelector('.bed-dot_9').classList.remove('dot-active')
    }

    if (i == 6) {
        document.querySelector('.bed-dot_5').classList.add('dot-active')
    } else {
        document.querySelector('.bed-dot_5').classList.remove('dot-active')
    }

    if (i == 7) {
        document.querySelector('.bed-dot_9').classList.add('dot-active')
    } else {
        document.querySelector('.bed-dot_9').classList.remove('dot-active')
    }

    if (i == 8) {
        document.querySelector('.bed-dot_6').classList.add('dot-active')
    } else {
        document.querySelector('.bed-dot_6').classList.remove('dot-active')
    }

    if (i == 9) {
        document.querySelector('.bed-dot_3').classList.add('dot-active')
    } else {
        document.querySelector('.bed-dot_3').classList.remove('dot-active')
    }

    // document.querySelector('.bed-dot_1').addClass('dot-active')
});



if (window.innerWidth <= 768) {
    document.querySelector('.bed-dot_1').classList.add('dot-active')

} else {
    document.querySelector('.bed-dot_1').classList.remove('dot-active')
}