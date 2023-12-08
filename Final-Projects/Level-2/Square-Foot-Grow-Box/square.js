let box = document.getElementById("box");
let ans = document.getElementById("ans");
let calculationForm = document.getElementById("calculationForm");

function calculation() {
  event.preventDefault();
  let heightInput = parseFloat(document.getElementById("height").value);
  let widthInput = parseFloat(document.getElementById("width").value);
  let squareFoot = heightInput * widthInput;
  let squareFootAnswer = squareFoot + " square feet";
  let input = "Input: " + widthInput + " width " + heightInput + " height";

  ans.innerHTML = `<li>${input}</li><br><li>${squareFootAnswer}</li>`;

  let pxHeight = heightInput * 10;
  let pxWidth = widthInput * 10;

  box.style.height = pxHeight + "px";
  box.style.width = pxWidth + "px";
}

calculationForm.addEventListener("submit", calculation);
