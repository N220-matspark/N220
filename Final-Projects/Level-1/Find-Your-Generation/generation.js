let form = document.getElementById("form");
let results = document.getElementById("results");

function genCheck() {
  event.preventDefault();
  let numberInput = parseFloat(document.getElementById("numberInput").value);
  let age = 2023 - numberInput;

  results.innerHTML = `You were born in ${age}. `;

  if (age >= 1946 && age <= 1964) {
    results.innerHTML += "You are a member of the Baby Boomer Generation!";
  } else if (age >= 1965 && age <= 1980) {
    results.innerHTML += "You are part of Generation X!";
  } else if (age >= 1981 && age <= 1996) {
    results.innerHTML += "You belong in the Y Generation!";
  } else if (age >= 1997 && age <= 2012) {
    results.innerHTML += "Generation Z is your generation!";
  } else if (age >= 2013 && age <= 2025) {
    results.innerHTML += "You are part of Generation Alpha.";
  } else {
    results.innerHTML += "Sorry - your generation is not listed.";
  }
}

form.addEventListener("submit", genCheck);
