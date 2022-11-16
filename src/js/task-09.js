"use strict";

// Напиши скрипт, який змінює кольори фону елемента <body> через 
// інлайн-стиль по кліку на 
// button.change-color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const chancgeColor = document.querySelector('.change-color');
const spanColorName = document.querySelector('.color')
const bodyColor = document.body;

chancgeColor.addEventListener('click', event => {
event.preventDefault()
bodyColor.style.backgroundColor = getRandomHexColor();
spanColorName.textContent = bodyColor.style.backgroundColor;

})

