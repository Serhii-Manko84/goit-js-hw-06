"use strict";

// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається 
// в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, 
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, 
// які ми вже додали у вихідні файли завдання.


const inputValidation = document.querySelector('#validation-input');

const addclassName = (remove, add) => {
    inputValidation.classList.remove(`${remove}`);
    inputValidation.classList.add(`${add}`);    
}

const validationName = (event => {
    if(+inputValidation.dataset.length === event.currentTarget.value.length){
        addclassName('invalid', 'valid')
    }
    else {
        addclassName('valid', 'invalid')
    }
});

inputValidation.addEventListener('blur', validationName);