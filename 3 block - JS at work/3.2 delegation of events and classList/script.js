const btns = document.querySelectorAll("button");
const wrapper = document.querySelector(".btn-block");
console.log(btns[0].classList);
// console.log(btns[0].classList.length); //Возвращает колличество классов у элемента
// console.log(btns[0].classList.item(0)); //Возвращает определенный класс у элемента
btns[0].classList.add("blue", "newclass"); //Добавить класс
// btns[0].classList.remove("blue"); //Удалить класс
console.log(btns[0].classList);

//Если класса нет то назначаем, если класс есть то удаляем
// btns[1].classList.toggle("red");

//проверка наличия класса на элементе
// const newClass = "red";
// const newClass = "blue";
// if (btns[1].classList.contains(newClass)) {
//   console.log(`Класс ${newClass} имеется у элемента`);
// } else {
//   console.log(`ERROR >> класса ${newClass} у элемента нет!`);
// }

//Назначения события на определенную кнопку
btns[0].addEventListener("click", () => {
  //   if (!btns[1].classList.contains("red")) {
  //     btns[1].classList.add("red");
  //   } else {
  //     btns[1].classList.remove("red");
  //   }
  btns[1].classList.toggle("red");
});

// console.log(btns[0].className);

//Делегирование событий
wrapper.addEventListener("click", (event) => {
  //   if (event.target && event.target.tagName == "BUTTON") {
  //     console.log("ткнул на кнопкууа;
  //   }
  //   if (event.target && event.target.classList.contains("blue")) {
  //     console.log("hello");
  //   }
  if (event.target && event.target.matches("button.red")) {
    console.log("Click red button");
  }
});

//Назначение событий без делегирования
// btns.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     console.log("hello");
//   });
// });
const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);
