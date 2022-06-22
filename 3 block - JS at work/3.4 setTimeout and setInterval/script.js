const btn = document.querySelector(".btn");
let timerID;
let i = 0;

myAnimation = () => {
  const elem = document.querySelector(".box");
  let pos = 0;

  const id = setInterval(frame, 10);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
};

btn.addEventListener("click", myAnimation);

// btn.addEventListener("click", (event) => {
//   //   const timerID = setTimeout(logger, 2000); //в timerID храниться id таймера
//   timerID = setInterval(logger, 500);
// });

// // clearInterval(timerID);

// const logger = () => {
//   if (i === 3) {
//     clearInterval(timerID);
//   }
//   console.log("text");
//   i++;
// };

// let id = setTimeout(
//   (log = () => {
//     console.log("hello");
//     id = setTimeout(log, 500);
//   }),
//   500
// );
