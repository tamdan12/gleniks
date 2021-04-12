let productsContainer = document.querySelector('.products__row')
let contentContainer = document.querySelector('.products__item_content')
let newLi = document.querySelector('.thumb-btn')

if (newLi) {

    function thumbBtnReplace() {
        if (window.innerWidth <= 768) {
            productsContainer.insertBefore(newLi, productsContainer.children[0]);


        } else {
            contentContainer.insertBefore(newLi, contentContainer.children[2]);
        }

    }


    window.addEventListener('resize', thumbBtnReplace);
    thumbBtnReplace();


}



const linkChanger1 = document.querySelector('.js-product-change_1')

const linkChanger2 = document.querySelector('.js-product-change_2')

const changingImg1 = document.querySelector('.products__img_1')

const changingImg2 = document.querySelector('.products__img_2')


if (linkChanger1) {

}


if (linkChanger1) {

    linkChanger1.addEventListener('click', function () {
        changingImg1.classList.add("products__img_active")
        changingImg2.classList.remove("products__img_active")

        linkChanger1.classList.add('thumb-btn__img_active')
        linkChanger2.classList.remove('thumb-btn__img_active')
    });
    linkChanger2.addEventListener('click', function () {
        changingImg1.classList.remove("products__img_active")
        changingImg2.classList.add("products__img_active")

        linkChanger2.classList.add('thumb-btn__img_active')
        linkChanger1.classList.remove('thumb-btn__img_active')
    });




    // 1
    (function () {

        let item = document.querySelector('.bed-review__item_2');
        let dot = document.querySelector('.bed-dot_1');


        function showDot() {
            dot.classList.add('dot-active')
        }

        function hideDot() {
            dot.classList.remove('dot-active')
        }

        function activeIconDot() {
            item.classList.add('dot-icon-active')
        }

        function deactiveIconDot() {
            item.classList.remove('dot-icon-active')
        }

        item.onmouseover = showDot;
        item.onmouseleave = hideDot;
        dot.onmouseover = activeIconDot;
        dot.onmouseleave = deactiveIconDot;

    })();
    // 2
    (function () {

        let item = document.querySelector('.bed-review__item_6');
        let dot = document.querySelector('.bed-dot_2');

        function showDot() {
            dot.classList.add('dot-active')
        }

        function hideDot() {
            dot.classList.remove('dot-active')
        }

        function activeIconDot() {
            item.classList.add('dot-icon-active')
        }

        function deactiveIconDot() {
            item.classList.remove('dot-icon-active')
        }

        item.onmouseover = showDot;
        item.onmouseleave = hideDot;
        dot.onmouseover = activeIconDot;
        dot.onmouseleave = deactiveIconDot;

    })();
    // 3
    (function () {

        let item = document.querySelector('.bed-review__item_4');
        let dot = document.querySelector('.bed-dot_3');

        function showDot() {
            dot.classList.add('dot-active')
        }

        function hideDot() {
            dot.classList.remove('dot-active')
        }

        function activeIconDot() {
            item.classList.add('dot-icon-active')
        }

        function deactiveIconDot() {
            item.classList.remove('dot-icon-active')
        }

        item.onmouseover = showDot;
        item.onmouseleave = hideDot;
        dot.onmouseover = activeIconDot;
        dot.onmouseleave = deactiveIconDot;

    })();
    // 4
    (function () {

        let item = document.querySelector('.bed-review__item_1');
        let dot = document.querySelector('.bed-dot_4');

        function showDot() {
            dot.classList.add('dot-active')
        }

        function hideDot() {
            dot.classList.remove('dot-active')
        }

        function activeIconDot() {
            item.classList.add('dot-icon-active')
        }

        function deactiveIconDot() {
            item.classList.remove('dot-icon-active')
        }

        item.onmouseover = showDot;
        item.onmouseleave = hideDot;
        dot.onmouseover = activeIconDot;
        dot.onmouseleave = deactiveIconDot;

    })();

    // 5
    (function () {

        let item = document.querySelector('.bed-review__item_8');
        let dot = document.querySelector('.bed-dot_5');

        function showDot() {
            dot.classList.add('dot-active')
        }

        function hideDot() {
            dot.classList.remove('dot-active')
        }

        function activeIconDot() {
            item.classList.add('dot-icon-active')
        }

        function deactiveIconDot() {
            item.classList.remove('dot-icon-active')
        }

        item.onmouseover = showDot;
        item.onmouseleave = hideDot;
        dot.onmouseover = activeIconDot;
        dot.onmouseleave = deactiveIconDot;

    })();
    // 6
    (function () {

        let item = document.querySelector('.bed-review__item_10');
        let dot = document.querySelector('.bed-dot_6');

        function showDot() {
            dot.classList.add('dot-active')
        }

        function hideDot() {
            dot.classList.remove('dot-active')
        }

        function activeIconDot() {
            item.classList.add('dot-icon-active')
        }

        function deactiveIconDot() {
            item.classList.remove('dot-icon-active')
        }

        item.onmouseover = showDot;
        item.onmouseleave = hideDot;
        dot.onmouseover = activeIconDot;
        dot.onmouseleave = deactiveIconDot;

    })();
    // 7
    (function () {

        let item = document.querySelector('.bed-review__item_3');
        let dot = document.querySelector('.bed-dot_7');

        function showDot() {
            dot.classList.add('dot-active')
        }

        function hideDot() {
            dot.classList.remove('dot-active')
        }

        function activeIconDot() {
            item.classList.add('dot-icon-active')
        }

        function deactiveIconDot() {
            item.classList.remove('dot-icon-active')
        }

        item.onmouseover = showDot;
        item.onmouseleave = hideDot;
        dot.onmouseover = activeIconDot;
        dot.onmouseleave = deactiveIconDot;

    })();
    // 8
    (function () {

        let item = document.querySelector('.bed-review__item_5');
        let dot = document.querySelector('.bed-dot_8');

        function showDot() {
            dot.classList.add('dot-active')
        }

        function hideDot() {
            dot.classList.remove('dot-active')
        }

        function activeIconDot() {
            item.classList.add('dot-icon-active')
        }

        function deactiveIconDot() {
            item.classList.remove('dot-icon-active')
        }

        item.onmouseover = showDot;
        item.onmouseleave = hideDot;
        dot.onmouseover = activeIconDot;
        dot.onmouseleave = deactiveIconDot;

    })();
    // 9
    (function () {

        let item = document.querySelector('.bed-review__item_9');
        let dot = document.querySelector('.bed-dot_9');

        function showDot() {
            dot.classList.add('dot-active')
        }

        function hideDot() {
            dot.classList.remove('dot-active')
        }

        function activeIconDot() {
            item.classList.add('dot-icon-active')
        }

        function deactiveIconDot() {
            item.classList.remove('dot-icon-active')
        }

        item.onmouseover = showDot;
        item.onmouseleave = hideDot;
        dot.onmouseover = activeIconDot;
        dot.onmouseleave = deactiveIconDot;

    })();
    // 10
    (function () {

        let item = document.querySelector('.bed-review__item_7');
        let dot = document.querySelector('.bed-dot_10');

        function showDot() {
            dot.classList.add('dot-active')
        }

        function hideDot() {
            dot.classList.remove('dot-active')
        }

        function activeIconDot() {
            item.classList.add('dot-icon-active')
        }

        function deactiveIconDot() {
            item.classList.remove('dot-icon-active')
        }

        item.onmouseover = showDot;
        item.onmouseleave = hideDot;
        dot.onmouseover = activeIconDot;
        dot.onmouseleave = deactiveIconDot;

    })();



}





