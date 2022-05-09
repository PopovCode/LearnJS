"use strict";

const options = {
  name: "test",
  width: 1024,
  height: 768,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    console.log(`\nЯ встроенный в объект метод >> makeTest`);
  },
};

function deleteKeyFromObj(obj) {
  //Удаляет пару Ключ:Значение в переданном объекте
  console.log(`Объект до удаления пары ключ:значение >> `);
  console.log(obj);

  delete options.name;

  console.log(`\nОбъект после удаления пары ключ:значение >> `);
  console.log(obj);
  console.log("\n");
}
deleteKeyFromObj(options);

function enumPropsObj(obj) {
  //Перебирает свойства обьекта с помощью циклов
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      for (let i in obj[key]) {
        console.log(`Свойство ${i} - ${obj[key][i]}`);
      }
    } else {
      console.log(`Свойство ${key} - ${obj[key]}`);
    }
  }
}
enumPropsObj(options);

function countKeysFromObj(obj) {
  //Подсчитывает ключи объекта с помощью втроенного в объект метода
  console.log(
    `\nКоличество ключей у объекта >> ${Object.keys(options).length}`
  );
}

countKeysFromObj(options);

// Вызов встроенного метода в обьект
options.makeTest();

// Деструктуризация объектов ES-6
const { border, bg } = options.colors;
console.log(border);
console.log(bg);
