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

