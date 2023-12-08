let form = document.getElementById("mortCalculator");
let inputResults = document.getElementById("inputsRes");
let monthly = document.getElementById("ans");

function mortCalc() {
  event.preventDefault();
  let loanAmt = parseFloat(document.getElementById("loanAmt").value);
  let interestRateInput = parseFloat(
    document.getElementById("interestRte").value
  );
  let loanTerms = parseFloat(document.getElementById("loanTerms").value);
  let loanTermsMonths = loanTerms * 12;

  let interestRate = interestRateInput / 100 / 12;

  let monthlyPayment =
    (loanAmt * (interestRate * Math.pow(1 + interestRate, loanTermsMonths))) /
    (Math.pow(1 + interestRate, loanTermsMonths) - 1);

  inputResults.innerHTML = "";

  inputResults.innerHTML += `
    <li>Loan Amount: $${loanAmt.toFixed(2)}</li>
    <li>Loan Terms: ${loanTerms} years</li>
    <li>Interest Rate: ${(interestRate * 12 * 100).toFixed(2)}%</li>
  `;

  monthly.innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}

form.addEventListener("submit", mortCalc);
