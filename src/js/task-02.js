"use strict";

// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. 
// Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const nameIngredients = document.querySelector('#ingredients')
console.log(nameIngredients)

const ingrArray = []

for (let i = 0; i < ingredients.length; i++) {
  const ingredient = document.createElement('li')
  ingredient.className = "item"
  ingredient.textContent = ingredients[i]
  ingrArray.push(ingredient)
  
    // console.log(ingredient)
}

nameIngredients.append(...ingrArray);
