var fName="Greg"; //string
var book = "Greg's Dogs";
var lName = "Brooks";
var myAge = 27; //Number/Integer
var student = true; //Boolean
var fullName = fName +" "+ lName;

student = false;

let homeTown = "Indianapolis";
homeTown = "Chicago";

const DIMEVAL = 10;

console.log(DIMEVAL);
console.log("N220");
console.log(book);

document.write(fName);
document.write(student);
document.write(homeTown);

//find data type of variable
console.log("Student: "+ typeof student);
console.log("myAge: " + typeof myAge);

//"Greg Brooks is 27 years old."
document.getElementById("fullName").innerHTML=fullName + " is " + myAge + " years old.";

//Lunch Problem
var banana = 1.25;
var sandwich = 4.50;
var chips = 1.50;
var drink = 2.00;
var lunch = drink+sandwich+chips*2+banana;

document.write("Lunch Cost: "+ "$"+lunch)
console.log("Lunch Cost: "+ "$"+lunch)

var cashOnHand = 12;
const TAXRATE = 0.07;
var lunchTotal = lunch + (lunch*TAXRATE);

document.getElementById('lunch').innerHTML+=" " +  cashOnHand>lunchTotal