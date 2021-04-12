



let footerContacts = document.querySelector('.js-replaceFooterContacts');

let footerMenu = document.querySelector('.footer__nav_pc');

let footerLogoWrapper = document.querySelector('.footer__logo-wrapper');

let footerImgLogoWrapper = document.querySelector('.footer__img-logo-wrapper');

let footerNavWrapper = document.querySelector('.footer__nav-wrapper');

var footerReplace = function footerReplace() {
    if (window.innerWidth <= 1160) {
        footerLogoWrapper.insertBefore(footerContacts, footerLogoWrapper.children[1]);

        footerImgLogoWrapper.insertBefore(footerMenu, footerImgLogoWrapper.children[1]);

    } else {
        footerNavWrapper.insertBefore(footerContacts, footerNavWrapper.children[2]);

        footerNavWrapper.insertBefore(footerMenu, footerNavWrapper.children[1]);
    }
};

if (window.innerWidth <= 1160) {
    footerReplace()
}

window.addEventListener('resize', footerReplace);





