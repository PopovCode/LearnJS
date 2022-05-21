// console.log(document.body);
// console.log(document.documentElement);

//Получаем все узлы которые находятся у родителя
// console.log(document.body.childNodes);

//Получаем первый элемент у родителя
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

//Получаем последний элемент у родителя
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

//Получить родителя у элемента
// console.log(document.querySelector("#current").parentNode);

//Работаем с нодами
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);

//Работаем с элементами
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').parentElement);

//Работа с циклом for of. Не выводим текстовые ноды.
for (let node of document.body.childNodes) {
  if (node.nodeName == "#text") {
    continue;
  }
  console.log(node);
}
