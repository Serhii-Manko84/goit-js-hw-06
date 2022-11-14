"use strict";

// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно 
// до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, 
// що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення 
// полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - 
// значенням властивості. 
// Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів 
// форми методом reset.

const refs = {
    elementForm: document.querySelector('.login-form'),
    elementEmail: document.querySelector('[type="email"]'),
    elementPassword: document.querySelector('[type="password"]'),
    elementSubmit: document.querySelector('[type="submit"]'),
}

const formSubmit = event =>{
    event.preventDefault()
    
    const formsElement = event.currentTarget.elements;
    const nameEmail = formsElement.email.value;
    const namePassword = formsElement.password.value
    
    
    if(nameEmail === "" || namePassword === "") {
        alert ('All fields must be filled')
    }
    else {
        const subEmailPassword = {nameEmail, namePassword}
        
        console.log(subEmailPassword)
        event.currentTarget.reset()
    }
}

refs.elementForm.addEventListener('submit', formSubmit)