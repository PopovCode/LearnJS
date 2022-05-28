"use strict";

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);

//Возвращает последний элемент массива, и удаляет его из массива
arr.pop();

//Вставляет элемент в конец массива
arr.push(10);
console.log(arr);

const printArr = (arr) => {
  //Печатает массив в консоль при помощи цикла for
  console.log("Print array FOR >> ");
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  console.log("\n");
};
printArr(arr);

//Печатает массив при помощи цикла valueOf
const printArr2 = (arr) => {
  console.log("\nPrint array FOR OF >> ");
  for (let value of arr) {
    console.log(value);
  }
  console.log("\n");
};
printArr2(arr);

//Печатает массив при помощи метода массива forEach(метод перебирает массив, не модефицируя его)
arr.forEach((item, i, arr) => {
  console.log(`${i}: ${item} внутри массива [${arr}]`);
});

//Разбивает строку по указанному символу (возвращает массив)
const str = "Хлеб, соль, молоко, сыр";
const products = str.split(", ");
console.log(`\n Метод SPLIT: ${products}`);

//Склеивает массив в строку по указанному символу
const joinProducts = products.join("; ");
console.log(`\n Метод JOIN: ${joinProducts}`);

//Сортировка массива с числами calback
const arr2 = [2, 25, 11, 6, 99];
const compareNum = (a, b) => {
  return a - b;
};
console.log("\n Неотсортированный массив >> ");
console.log(arr2);
arr2.sort(compareNum);
console.log("\n Отсортированный массив >> ");
console.log(arr2);
