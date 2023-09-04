//Dating
var tickets = 3;
var ticketsCost = 14;

document.getElementById("ticketNum").innerHTML += tickets;
document.getElementById("ticketCost").innerHTML += ticketsCost;
document.getElementById("ttCost").innerHTML += tickets * ticketsCost;

//Shopping
var bankAcc = 235.87;
var jacket = 70;
var sweater = 55;
var shirt = 35;
var pants = 75;
var skirt = 49;
var sandals = 30;
var shoes = 60;

document.getElementById("bank").innerHTML += bankAcc - (shirt + pants + shoes);
document.getElementById("addJacket").innerHTML +=
  bankAcc - (shirt + pants + shoes) >= jacket;

//Pizza
var pizza = 4;
var pizzaSlices = 8;
var slicePerStudent = 2.5;
document.getElementById("profPizza").innerHTML +=
  "She could feed " +
  (pizza * pizzaSlices) / slicePerStudent +
  ", or just 12 students.";
document.getElementById("profPizza").innerHTML +=
  " That would mean there is " +
  ((pizza * pizzaSlices) % slicePerStudent) +
  " pieces of pizza left over for Professor Rector.";

//Monty's Mega Bar
var adult = 12;
var child = 6;
var drinks = 1.5;
document.getElementById("Monty").innerHTML +=
  "$" + (2 * adult + child + 3 * drinks);
  
//Average Earned Tips
var week1 = 202.45;
var week2 = 134.97;
var week3 = 256.63;
var week4 = 178.22;
document.getElementById("tips").innerHTML +=
  "Your average weekly tips would be " + (week1 + week2 + week3 + week4) / 4;
//
