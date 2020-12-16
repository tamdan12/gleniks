/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/adv-slider/adv-slider.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/adv-slider/adv-slider.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var menu = ['Slide 1', 'Slide 2', 'Slide 3'];
var mySwiper = new Swiper('.swiper-container', {
  autoHeight: true,
  speed: 500,
  effect: 'fade',
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


'use strict'; //burger


window.addEventListener('DOMContentLoaded', function () {
  var menu = document.querySelector('.header__list'),
      menuItem = document.querySelectorAll('.header__link'),
      hamburger = document.querySelector('.header__burger');
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('burger_active');
    menu.classList.toggle('menu_active');
  });
  menuItem.forEach(function (item) {
    item.addEventListener('click', function () {
      hamburger.classList.toggle('burger_active');
      menu.classList.toggle('menu_active');
    });
  });
}); // slowScroll

if (document.querySelectorAll('a[href*="#"]')) {
  var anchors = document.querySelectorAll('a[href*="#"]');

  var _iterator = _createForOfIteratorHelper(anchors),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var blockID = anchor.getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
} // header__link_active


if (document.documentElement.clientWidth <= 1260) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
    var href = location.href;

    if (href == 'https://borisslonov.github.io/gleniks/dist/page-catalog.html') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header__link_1').addClass('header__link_active');
    }

    if (href == 'https://borisslonov.github.io/gleniks/dist/page-partners.html') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header__link_2').addClass('header__link_active');
    }

    if (href == 'https://borisslonov.github.io/gleniks/dist/page-delivery.html') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header__link_3').addClass('header__link_active');
    }

    if (href == 'https://borisslonov.github.io/hi-fi/dist/page-contacts.html') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header__link_4').addClass('header__link_active');
    }
  });
} //add class on scroll


document.addEventListener("scroll", function (e) {
  var content = document.querySelector("body");
  var scrolled = document.scrollingElement.scrollTop;
  var position = content.offsetTop;
  var header = document.querySelector("header");

  if (scrolled > position + 50) {
    content.classList.add('header-bgc');
  } else {
    content.classList.remove('header-bgc');
    content.classList.add('header-none-bgc');
  }
});
var btnScrollDown = document.querySelector('#scroll_down');

if (btnScrollDown) {
  (function () {
    var btnScrollDown = document.querySelector('#scroll_down');

    function scrollDown() {
      var windowCoords = document.documentElement.clientHeight;

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
    strings: ['неломких ^2000', 'крепких ^2000', 'премиальных ^2000', 'УНИКАЛЬНЫХ ^2000'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    startDelay: 2000,
    cursorChar: ''
  });
};

/***/ }),

/***/ "./src/blocks/modules/page-ordering/page-ordering.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/page-ordering/page-ordering.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// let rowContacts = document.querySelector(".ordering__row_contacts")
// let btnContacts = document.querySelector(".ordering-btn-toggle")
// let rowHidden = document.querySelector(".ordering-row-hidden")
// if (rowContacts) {
//     document.btnContacts.addEventListener('click', function () {
//         rowContacts.classList.toggle(rowHidden)
//     })
// }

/***/ }),

/***/ "./src/blocks/modules/page-single-product/page-single-product.js":
/*!***********************************************************************!*\
  !*** ./src/blocks/modules/page-single-product/page-single-product.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/popups/popups.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/popups/popups.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");



MicroModal.init({
  disableScroll: true
});

if (document.getElementById('counter')) {
  //counter 
  var drawCounter = function drawCounter() {
    document.getElementById('counter').innerHTML = store.counter;
  };

  var bindEvents = function bindEvents() {
    document.getElementById('increase').addEventListener('click', function () {
      increase();
      drawCounter();
    });
    document.getElementById('decrease').addEventListener('click', function () {
      decrease();
      drawCounter();
    });
  };

  var store = {
    counter: 1
  };

  var increase = function increase() {
    store.counter++;
  };

  var decrease = function decrease() {
    store.counter--;
  };

  var init = function init() {
    bindEvents();
    drawCounter();
  };

  init();
}

if (document.getElementById('counter-2')) {
  //counter-single-product
  var drawCounter2 = function drawCounter2() {
    document.getElementById('counter-2').innerHTML = store2.counter;
  };

  var bindEvents2 = function bindEvents2() {
    document.getElementById('increase-2').addEventListener('click', function () {
      increase2();
      drawCounter2();
    });
    document.getElementById('decrease-2').addEventListener('click', function () {
      decrease2();
      drawCounter2();
    });
  };

  var store2 = {
    counter: 1
  };

  var increase2 = function increase2() {
    store2.counter++;
  };

  var decrease2 = function decrease2() {
    store2.counter--;
  };

  var init2 = function init2() {
    bindEvents2();
    drawCounter2();
  };

  init2();
}

/***/ }),

/***/ "./src/blocks/modules/products/products.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/products/products.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var productsContainer = document.querySelector('.products__row');
var contentContainer = document.querySelector('.products__item_content');
var newLi = document.querySelector('.thumb-btn');

if (newLi) {
  var thumbBtnReplace = function thumbBtnReplace() {
    if (window.innerWidth <= 768) {
      productsContainer.insertBefore(newLi, productsContainer.children[0]);
    } else {
      contentContainer.insertBefore(newLi, contentContainer.children[2]);
    }
  };

  window.addEventListener('resize', thumbBtnReplace);
}

var linkChanger1 = document.querySelector('.js-product-change_1');
var linkChanger2 = document.querySelector('.js-product-change_2');
var changingImg1 = document.querySelector('.products__img_1');
var changingImg2 = document.querySelector('.products__img_2');

if (linkChanger1) {
  linkChanger1.addEventListener('click', function () {
    changingImg1.style.display = "block";
    changingImg2.style.display = "none";
  });
}

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_popups_popups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/popups/popups */ "./src/blocks/modules/popups/popups.js");
/* harmony import */ var _modules_adv_slider_adv_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/adv-slider/adv-slider.js */ "./src/blocks/modules/adv-slider/adv-slider.js");
/* harmony import */ var _modules_products_products_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/products/products.js */ "./src/blocks/modules/products/products.js");
/* harmony import */ var _modules_products_products_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_products_products_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_page_ordering_page_ordering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/page-ordering/page-ordering */ "./src/blocks/modules/page-ordering/page-ordering.js");
/* harmony import */ var _modules_page_ordering_page_ordering__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_page_ordering_page_ordering__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_page_single_product_page_single_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/page-single-product/page-single-product */ "./src/blocks/modules/page-single-product/page-single-product.js");
/* harmony import */ var _modules_page_single_product_page_single_product__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_page_single_product_page_single_product__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map