"use strict";

const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  wrapper = document.querySelector(".wrapper"),
  hearts = wrapper.querySelectorAll(".heart"),
  oneHeart = wrapper.querySelector(".heart");

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

box.style.cssText = "background-color: green; width:500px";

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach((item) => {
  item.style.backgroundColor = "blue";
});

const div = document.createElement("div");
const text = document.createTextNode("Hello world");

div.classList.add("black");
// document.body.append(div);

wrapper.append(div); //Добавить эелемент в конец
// wrapper.prepend(div); //Добавить элемент в начало
// wrapper.appendChild(div);

// hearts[0].before(div); //Добавить элемент перед
// hearts[0].after(div); //Добавить элемент после

// wrapper.insertBefore(div, hearts[0]); //Добавить эелемент перед (добавляемый эелемент, относительный элемент)

// circles[0].remove(); //Удалить элемент
// wrapper.removeChild(hearts[0]); //Удалить элемент у родителя(устаревший метод)

hearts[0].replaceWith(circles[0]); //Заменить элемент на другой
// wrapper.replaceChild(circles[0], hearts[0]); //Устаревший метод замены элементов

div.innerHTML = "<h1>Hello world</h1>"; //Добавляет текст + html tags
// div.textContent = "Hello"; //Добавляет только текст
div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>");
