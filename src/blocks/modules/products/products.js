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
        changingImg1.style.display = "block"
        changingImg2.style.display = "none"
    });
}
