console.log("main.js");

// let container = document.getElementById("container");
// let boxes = document.getElementsByClassName("box");
// let randomRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// for (const box of boxes) {
//   console.log(box);
//   box.style.backgroundColor = `rgb(${randomRange(30, 220)}, ${randomRange(
//     30,
//     220
//   )}, ${randomRange(30, 220)})`;
//   box.style.width = `${randomRange(100, 200)}px`;
//   box.style.height = `${randomRange(100, 200)}px`;
//   box.style.left = `${randomRange(0, container.clientWidth)}px`;
//   box.style.top = `${randomRange(0, document.body.clientHeight)}px`;
// }

let container = document.getElementById("container");
window.addEventListener("mousemove", (event) => {
  let mx = event.clientX,
    my = event.clientY;
  let xPercent = mx / document.body.clientWidth,
    yPercent = my / document.body.clientHeight;

  let panX =
      container.offsetWidth * xPercent * -1 +
      xPercent * document.body.clientWidth,
    panY =
      container.offsetHeight * yPercent * -1 +
      yPercent * document.body.clientHeight;

  // container.style.transform = `translate(${panX}px, ${panY}px)`;
  container.animate(
    {
      transform: `translate(${panX}px, ${panY}px)`,
    },
    { duration: 4000, fill: "forwards", easing: "ease" }
  );
});
