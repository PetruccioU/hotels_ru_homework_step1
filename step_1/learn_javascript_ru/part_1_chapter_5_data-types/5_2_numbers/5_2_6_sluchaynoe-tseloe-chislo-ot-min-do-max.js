'use strict'
// Случайное целое число от min до max
// важность: 2
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до
// max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.
//
// Пример работы функции:
function random(min, max) {
    return Math.floor(min + Math.random() * (max+1 - min));
}
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));