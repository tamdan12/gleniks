"use strict"

import $ from "micromodal"



MicroModal.init({
    disableScroll: true
});



if (document.getElementById('counter')) {
    //counter 
    var drawCounter = function () {
        document.getElementById('counter').innerHTML = store.counter
    }

    var bindEvents = function () {
        document.getElementById('increase').addEventListener('click', function () {
            increase()
            drawCounter()
        })
        document.getElementById('decrease').addEventListener('click', function () {
            decrease()
            drawCounter()
        })
    }


    var store = {
        counter: 1
    }

    var increase = function () {
        store.counter++
    }

    var decrease = function () {
        store.counter--
    }

    var init = function () {
        bindEvents()
        drawCounter()
    }

    init()
}




if (document.getElementById('counter-2')) {
    //counter-single-product
    var drawCounter2 = function () {
        document.getElementById('counter-2').innerHTML = store2.counter
    }

    var bindEvents2 = function () {
        document.getElementById('increase-2').addEventListener('click', function () {
            increase2()
            drawCounter2()
        })
        document.getElementById('decrease-2').addEventListener('click', function () {
            decrease2()
            drawCounter2()
        })
    }

    var store2 = {
        counter: 1
    }

    var increase2 = function () {
        store2.counter++
    }

    var decrease2 = function () {
        store2.counter--
    }

    var init2 = function () {
        bindEvents2()
        drawCounter2()
    }

    init2()
}

