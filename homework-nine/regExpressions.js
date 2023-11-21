var stringInput = document.getElementById("string");
var zipInput = document.getElementById("myzip");
var ccardInput = document.getElementById("ccard");
var phoneInput = document.getElementById("phone");

var stringAns = document.getElementById("stringAns");
var zipAns = document.getElementById("zipAns");
var ccardAns = document.getElementById("ccAns");
var phoneAns = document.getElementById("phoneAns");

var stringReg = /.*/;
var zipReg = /^\d{5}(-\d{4})?$/;
var ccardReg = /^\d{4}([-.\s]?\d{4}){3}$/;
var phoneReg = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

function checkString() {
  let stringValue = stringInput.value;
  let isTrue = stringReg.test(stringValue);

  if (isTrue) {
    stringAns.innerHTML = "True";
    stringAns.style.color = "green";
  } else {
    stringAns.innerText = "False";
    stringAns.style.color = "crimson";
  }
}

stringInput.addEventListener("input", checkString);

function checkZip() {
  let zipValue = zipInput.value;
  let isTrue = zipReg.test(zipValue);

  if (isTrue) {
    zipAns.innerHTML = "True";
    zipAns.style.color = "green";
  } else {
    zipAns.innerText = "False";
    zipAns.style.color = "crimson";
  }
}

zipInput.addEventListener("input", checkZip);

function checkCCard() {
  let ccardValue = ccardInput.value;
  let isTrue = ccardReg.test(ccardValue);

  if (isTrue) {
    ccardAns.innerHTML = "True";
    ccardAns.style.color = "green";
  } else {
    ccardAns.innerText = "False";
    ccardAns.style.color = "crimson";
  }
}

ccardInput.addEventListener("input", checkCCard);

function checkPhone() {
  let phoneValue = phoneInput.value;
  let isTrue = phoneReg.test(phoneValue);

  if (isTrue) {
    phoneAns.innerHTML = "True";
    phoneAns.style.color = "green";
  } else {
    phoneAns.innerText = "False";
    phoneAns.style.color = "crimson";
  }
}

phoneInput.addEventListener("input", checkPhone);
