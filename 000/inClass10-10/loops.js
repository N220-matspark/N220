//For Loop
for (let i = 0; i <= 5; i++) {
  document.getElementById("for").innerHTML += "<br>Number: " + i;
}

//While Loop
let weeks = 5;
while (weeks > 0) {
  if (weeks == 1) {
    document.getElementById("while").innerHTML +=
      "There is " + weeks + " week left.<br>";
    weeks--;
  } else {
    document.getElementById("while").innerHTML +=
      "There are " + weeks + " weeks left.<br>";
    weeks--;
  }
}

//Do While Loop
let candy = 3;
do {
  document.getElementById("doWhile").innerHTML +=
    "I have " + candy + " pieces of candy.<br>";
  candy--;
} while (candy >= 0);
{
}

//for in loop
const Course = {
  "cNum":"N220",
  "title":"Intro to Java Script",
  "enrolled":20,
  "prereq":false,
  "offering":['Fall','Spring']
}

for(p in Course) {
  document.getElementById('forIn').innerHTML += p + ": " + Course[p] +"<br>";
}
for(month in months){
  console.log(month + ": " + months[month]);
}
let holiday = 'halloween';
console.log("For in loops")
for(h in holiday){
  console.log(h + ": " + holiday[h]);
}

//for out loops
const Course2 = {
  "cNum":"N220",
  "title":"Intro to Java Script",
  "enrolled":20,
  "prereq":false,
  "offering":['Fall','Spring']
}


let holiday2 = 'halloween';
console.log("For in loops")
for(h of holiday2){
  console.log(h);
}

//Loop problems section
var months = ["January", "February", "March", "April", "May", "June"];
let monthList = "<ul>";

for (let i = 0; i < months.length; i++) {
  monthList += months[i] + "<br>";
}

let monthList2 = "<ul>";
document.getElementById("an1").innerHTML += monthList;

for (let i = 0; i < months.length; i++) {
  monthList2 += "<li>" + months[i] + "</li>" + "<br>";
}
document.getElementById("an2").innerHTML += monthList2 + "</ul>";

let pizzaSlices = 9;
while (pizzaSlices >= 2) {
  document.getElementById("an3").innerHTML +=
    "There are " + pizzaSlices + " slices of pizza left.<br>";
  pizzaSlices--;
}

let number = 15;
do {
  document.getElementById("an4").innerHTML +=
    "Number Count: " + number + "<br>";
  number++;
} while (number < 20);

let today = new Date();
let tDate = today.getDate();
for (let num = 50; num >= 5; num -= 5) {
  document.getElementById("an5").innerHTML += "Day: " + num + "<br>";
  if (num == tDate) {
    document.getElementById("an5").innerHTML += " That's today's date <br>";
    break;
  }
}

//7
let tickets = 10;
let ticketTxt = '';
while (tickets > 0) {
  tickets--;
  if (tickets == 0) {
    ticketTxt += "All tickets have been sold.<br>";
    break;
  }
  ticketTxt += "Another seat is gone. Only " + tickets + " tickets left.<br>";
  if (tickets == 5) {
    ticketTxt += "Half the tickets are sold. Buy yours NOW!<br>";
  } 
}

document.getElementById("an7").innerHTML += ticketTxt