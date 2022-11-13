"use strict";

// Напиши скрипт, який реагує на зміну значення input#font-size-control 
// (подія input) і змінює інлайн-стиль span#text, оновлюючи 
// властивість font-size. В результаті, перетягуючи повзунок, 
// буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const refs = {
    sizeFont: document.querySelector('#font-size-control'),
    spanSize: document.querySelector('#text')
}

refs.sizeFont.addEventListener('input', event => {
const size = event.currentTarget.value;
refs.spanSize.style.fontSize = `${size}px`;
});
