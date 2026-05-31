/*
Задача 001

Условие:
Напишите программу, которая переворачивает строку.

Вход:
hello

Выход:
olleh
*/

const text = "hello";

const reversed = text.split("").reverse().join("");

console.log(reversed);