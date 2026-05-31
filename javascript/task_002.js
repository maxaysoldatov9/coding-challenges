/*
Задача 002

Условие:
Напишите программу, которая переворачивает массив.

Вход:
[1, 2, 3, 4, 5]

Выход:
[5, 4, 3, 2, 1]
*/

const numbers = [1, 2, 3, 4, 5];

const reversed = [];

for (let i = numbers.length - 1; i >= 0; i--) {
    reversed.push(numbers[i]);
}

console.log(reversed);