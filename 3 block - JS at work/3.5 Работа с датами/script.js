const now = new Date();
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log(now.setHours(23));
  console.log(now);
  //   console.log(now.getUTCFullYear());
  //   console.log(now.getMonth());
  //   console.log(now.getDate());
  //   console.log(now.getDay()); //Получить день недели
  //   console.log("Hours: " + now.getHours());
  //   console.log("UTCHours: " + now.getUTCHours());
  //   console.log(now.getTimezoneOffset()); //Получить разницу между зонами
  //   console.log(now.getTime());
});

let start = new Date();

for (let i = 0; i < 500000; i++) {
  let some = i ** 3;
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} миллисекунд`);
