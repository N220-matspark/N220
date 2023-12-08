let form = document.getElementById("changeCalculator");
let changeInput = document.getElementById("changeInput");
let results = document.getElementById("results");

function changeCalc() {
  console.log("submitted");
  event.preventDefault();
  let change = parseFloat(changeInput.value);
  let amount = Math.floor(change * 100);
  let remainder = amount / 100;

  let quarters = Math.floor(remainder / 25);
  remainder = remainder % 25;

  let dimes = Math.floor(remainder / 10);
  remainder = remainder % 10;

  let nickels = Math.floor(remainder / 5);
  remainder = remainder % 5;

  let pennies = remainder;
  console.log(remainder);
  console.log("Q " + quarters);
  console.log("D " + dimes);
  console.log("N " + nickels);
  console.log("P " + pennies);
  results.innerHTML = "";

  if (quarters > 0) {
    results.innerHTML += "<li>" + quarters + " Quarters</li>";
  }
  if (dimes > 0) {
    results.innerHTML += "<li>" + dimes + " Dimes</li>";
  }
  if (nickels > 0) {
    results.innerHTML += "<li>" + nickels + " Nickels</li>";
  }
  if (pennies > 0) {
    results.innerHTML += "<li>" + pennies + " Pennies</li>";
  }
}

form.addEventListener("submit", changeCalc);
