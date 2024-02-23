console.clear();

import getRandomColor from "./utils/randomColor.js";

const root = document.getElementById("root");

const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", () => {
  const color = getRandomColor();
  circle.style.backgroundColor = color;
});

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  const color = getRandomColor();
  square.style.backgroundColor = color;
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  const color = getRandomColor();
  pentagon.style.backgroundColor = color;
});

root.append(circle, square, pentagon);
