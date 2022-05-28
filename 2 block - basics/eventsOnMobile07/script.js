//touchstart - произошло касание к элементу
//touchmove - движение пальца при касание к элементу
//touchend - палец оторвался от элемента
//touchenter - движение пальца зашло за предел элемента
//touchleave - движение пальца ушло за пределы элемента
//touchcancel - возникает когда точка соприкосновения больше не регистрируется на поверхности

document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box");
  box.addEventListener("touchstart", (e) => {
    e.preventDefault();
    console.log("start");
    console.log(e.touches);
  });

  box.addEventListener("touchmove", (e) => {
    e.preventDefault();
    console.log(e.targetTouches[0].pageX);
  });

  box.addEventListener("touchend", (e) => {
    e.preventDefault();
    console.log("end");
  });
});

//event.touches - возвращает список пальцев которые сейчас взаимодействуют с экраном.
//event.targetTouches - возвращает список пальцев которые взаимодействуют именно с элементом.
//event.changedTouches - возвращает список пальцев которые учавствуют в текущем событии.
