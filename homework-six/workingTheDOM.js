document.querySelector("#title").textContent = "DOM Manipulation";

document.querySelector("#container").style.backgroundColor = "lightblue";

var ulElement = document.querySelector("ul");

var newItem7 = document.createElement("li");
newItem7.textContent = "Item 7";

document.querySelector("ul li:first-child").style.color = "crimson";

document.querySelector("ul li:nth-child(3)").style.backgroundColor = "pink";

document.querySelector("ul li:nth-child(5)").style.backgroundColor = "yellow";

var seventhItem = document.createElement("li");
seventhItem.textContent = "Item 7";
seventhItem.style.backgroundColor = "lightGray";
seventhItem.style.color = "royalBlue";
ulElement.appendChild(seventhItem);

var nameItem = document.createElement("li");
nameItem.textContent = "Matthew Sparkman";

document.querySelector("ul li:nth-child(4)").remove();

var buttonElement = document.querySelector("#btn");
var italicElement = document.createElement("i");
italicElement.textContent = "Click Me";
italicElement.style.color = "white";
buttonElement.style.backgroundColor = "rebeccapurple";
buttonElement.style.border = "1px solid white";
buttonElement.textContent = "";
buttonElement.appendChild(italicElement);

ulElement.appendChild(nameItem);
