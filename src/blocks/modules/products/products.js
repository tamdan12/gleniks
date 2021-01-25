let productsContainer = document.querySelector('.products__row')
let contentContainer = document.querySelector('.products__item_content')
let newLi = document.querySelector('.thumb-btn')

if (newLi) {
    window.addEventListener('resize', thumbBtnReplace);

    function thumbBtnReplace() {
        if (window.innerWidth <= 768) {
            productsContainer.insertBefore(newLi, productsContainer.children[0]);
        } else {
            contentContainer.insertBefore(newLi, contentContainer.children[2]);
        }
    }
}



const linkChanger1 = document.querySelector('.js-product-change_1')

const linkChanger2 = document.querySelector('.js-product-change_2')

const changingImg1 = document.querySelector('.products__img_1')

const changingImg2 = document.querySelector('.products__img_2')


if (linkChanger1) {

    linkChanger1.addEventListener('click', function () {
        changingImg1.classList.add("products__img_active")
        changingImg2.classList.remove("products__img_active")
    });
    linkChanger2.addEventListener('click', function () {
        changingImg1.classList.remove("products__img_active")
        changingImg2.classList.add("products__img_active")
    });
}



(function () {

    let item1 = document.querySelector('.bed-review__item_2');
    let dot1 = document.querySelector('.bed-dot_1');

    function showDot1() {
        dot1.classList.add('dot-active')
    }

    function hideDot1() {
        dot1.classList.remove('dot-active')
    }

    function activeIconDot() {
        item1.classList.add('dot-icon-active')
    }

    function deactiveIconDot() {
        item1.classList.remove('dot-icon-active')
    }

    item1.onmouseover = showDot1;
    item1.onmouseleave = hideDot1;
    dot1.onmouseover = activeIconDot;
    dot1.onmouseleave = deactiveIconDot;

})();