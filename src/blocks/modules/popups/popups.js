"use strict"

import $ from "micromodal"



MicroModal.init({
    disableScroll: true
});



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