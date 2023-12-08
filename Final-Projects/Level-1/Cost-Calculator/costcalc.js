let form = document.getElementById("costCalcForm");
let results = document.getElementById("results");

function costCalc() {
  event.preventDefault();
  let price = parseFloat(document.getElementById("price").value);
  let disCode = document.getElementById("disCode").value;

  let savings = 0;

  if (disCode == "SAVE20") {
    savings = price * 0.2;
  }
  if (disCode == "JOLLYDAYS") {
    savings = price * 0.15;
  }
  if (disCode == "HOLIDAY10") {
    savings = price * 0.1;
  }

  let subtotal = price - savings;
  let total = subtotal + subtotal * 0.08;

  if (disCode == "SAVE20" || disCode == "JOLLYDAYS" || disCode == "HOLIDAY10") {
    results.innerHTML = `<li>Input: ${price.toFixed(
      2
    )} and ${disCode}</li> <li>Result: Your Total: $${total.toFixed(
      2
    )} <br> You saved $${savings.toFixed(2)}!</li>`;
  } else {
    results.innerHTML = "Invalid Discount Code";
  }
}

form.addEventListener("submit", costCalc);
