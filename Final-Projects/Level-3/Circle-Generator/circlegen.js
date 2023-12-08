let form = document.getElementById("generateForm");
let numberInput = document.getElementById("circleNumberInput");
let circleContainer = document.getElementById("circleContainer");
let buttons = document.querySelectorAll("button");

function genCircles() {
  event.preventDefault();
  circleContainer.innerHTML = "";

  let circleNum = numberInput.value;

  for (let i = 0; i < circleNum; i++) {
    let circle = document.createElement("button");
    circle.addEventListener("click", changeColor);
    circleContainer.appendChild(circle);
  }
}

function changeColor(event) {
  let circle = event.target;
  let currentColor = circle.style.backgroundColor;

  if (!currentColor) {
    circle.style.backgroundColor = "blue";
  } else {
    circle.style.backgroundColor = "";
  }
}

form.addEventListener("submit", genCircles);
