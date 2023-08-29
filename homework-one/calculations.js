
//Dating
var tickets=3; ticketsCost=14;

document.getElementById('ticketNum').innerHTML += tickets;
document.getElementById('ticketCost').innerHTML += ticketsCost;
document.getElementById('ttCost').innerHTML += tickets*ticketsCost;

//Shopping
var bankAcc = 235.87;
var jacket=70; sweater=55; shirt=35; pants=75; skirt=49; sandals=30; shoes=60;

document.getElementById('bank').innerHTML += bankAcc-(shirt+pants+shoes);
document.getElementById('addJacket').innerHTML += (bankAcc-(shirt+pants+shoes))>=jacket;

//Pizza
var pizza=4; pizzaSlices=8; slicePerStudent=2.5;
document.getElementById('profPizza').innerHTML += "She could feed " + ((pizza*pizzaSlices)/slicePerStudent) + " Students";
//Monty's Mega Bar

//Average Earned Tips

//