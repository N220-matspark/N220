let form = document.getElementById("pigLatinForm");

function pigLatinName() {
  event.preventDefault();
  let firstNameInput = document.getElementById("fName").value;
  let lastNameInput = document.getElementById("lName").value;
  let results = document.getElementById("results");

  let firstName = firstNameInput.toLowerCase();
  let lastName = lastNameInput.toLowerCase();

  let pigLatinFirstNameStr = firstName.slice(1) + firstName.charAt(0) + "ay";
  let pigLatinLastNameStr = lastName.slice(1) + lastName.charAt(0) + "ay";

  let pigLatinFirstName =
    pigLatinFirstNameStr[0].toUpperCase() + pigLatinFirstNameStr.slice(1);
  let pigLatinLastName =
    pigLatinLastNameStr[0].toUpperCase() + pigLatinLastNameStr.slice(1);

  let inputText = `Input: ${firstNameInput} ${lastNameInput}`;
  let resultText = `Your pig latin name is ${pigLatinFirstName} ${pigLatinLastName}.`;
  results.innerHTML = `<li>${inputText}</li><li>${resultText}</li>`;
}

form.addEventListener("submit", pigLatinName);
