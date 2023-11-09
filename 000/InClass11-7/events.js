//HTML event handler
function oldSchool() {
  //Print comment under hTML event handler bullet point
  document.getElementById("htmlEH").innerText =
    "This is bad practice. Don't use this one.";
}

function tradText() {
  document.getElementById("traditional").innerText =
    "You can only attack one function to this event handler.";
}

document.getElementsByTagName("input")[1].onclick = tradText;

//Level 2 Event Listener

function alertMe() {
  //run alert that reads Use this!
  alert("Use this");
}

function level2Text() {
  //text under level 2 bullet
  document.getElementById("level2").innerText =
    "You can attach one or more functions to this event handler.";
}

let level2Button = document.getElementsByTagName("input")[2];

level2Button.addEventListener(
  "click",
  function () {
    level2Text();
    alertMe();
  },
  false
);

//UI EVENT

let pageURL = document.URL;
let lastModified = document.lastModified;

function displayInfo() {
  document.getElementById("pageURL").innerText = pageURL;
  document.getElementById("myLastUpdate").innerText =
    "Last Update: " + lastModified;
}

window.addEventListener("load", displayInfo);

//Keyboard Events

let keyInput = document.getElementsByTagName("input")[3];
let keyCount = 0;

function countKeys() {
  keyCount++;
  document.getElementById("pressNumber").innerText =
    "You have pressed " + keyCount + " times.";
}

keyInput.addEventListener("keypress", countKeys);

//Mouse Events

let mouseClick = document.getElementById("danger");

function mouseText() {
  mouseClick.innerHTML = "<b>CHANGED</b>";
}

mouseClick.addEventListener("dblclick", mouseText);

//focus event

let focusID = document.getElementsByClassName("blurText")[0];

function upText() {
  focusID.style.textTransform = "uppercase";
}
function lowerText() {
  focusID.style.textTransform = "lowercase";
}

focusID.addEventListener("blur", upText);
focusID.addEventListener("focus", lowerText);

//form events
let dropDown = document.getElementById("js");
let dropText = document.getElementById("selectText");

function selectedChoice() {
  let yourChoice = dropDown.options[dropDown.selectedIndex].value;
  let printChoice;

  switch (yourChoice) {
    case "javascript":
      printChoice = "Javascript is the base for all of these.";
      break;
    case "jQuery":
      printChoice = "Jquery you will learn";
      break;
    case "Angular":
      printChoice = "Angular is a very popular Javascript framework";
      break;
    case "React":
      printChoice = "You will learn React in advanced web courses";
      break;
    default:
      printChoice = "Pick an option";
      break;
  }

  dropText.innerText = printChoice;
}

dropDown.addEventListener("change", selectedChoice);

//Add/Delete List
let addItemBtn = document.getElementById("addItem");
let delItemBtn = document.getElementById("delItem");
let list = document.getElementById("myList");

function addItem() {
  let newItem = prompt("Add Item: ");
  let newLi = document.createElement("li");
  let newLiText = document.createTextNode(newItem);
  newLi.appendChild(newLiText);
  list.appendChild(newLi);
}

addItemBtn.addEventListener("click", addItem);

//Target of event
function getTarget(e) {
  if (!e) {
    e = window.event;
  }
  return e.target || e.srcElement;
}

//remove target element from the list we made before
function deleteItem(e) {
  let target = getTarget(e);
  let tParent = target.parentNode;
  tParent.removeChild(target);
}

list.addEventListener("click", deleteItem);
