function getGreeting(){
    let greeting = document.getElementById('greeting').value;
    console.log("Greeting: ", greeting.trim());
    console.log(greeting);

    let gMsg = "Your message is " + greeting.length + " long.";
    let middleC = greeting.length/2;
}

//Number Object
var newNumber = 6.346931;
document.getElementById('fixed').innerHTML = newNumber.toFixed(1);
document.getElementById('precise').innerHTML = newNumber.toPrecision(4);

//Math Object
var myPi = Math.PI; //just pi number (3.1415)
console.log(myPi)

document.getElementById('pi').innerHTML = Math.PI.toPrecision(8);//pi
document.getElementById('round').innerHTML = Math.round(myPi); //rounding
document.getElementById('ceil').innerHTML = Math.ceil(myPi); //ceiling
document.getElementById('floor').innerHTML = Math.floor(myPi); //floor

var randomNum = Math.random()*10;
document.getElementById('random').innerHTML = Math.floor(randomNum)+1; // always between 1-10 with math.floor(variable)+1

//Date Object
const today = new Date();
document.write("Today: " + today);
document.write("<br>Day: " + today.getDay());
document.write("<br>Date: " + today.getDate());
document.write("<br>Month: " + today.getMonth());
document.write("<br>Year: " + today.getFullYear());
document.write("<br>Today's Date: " + today.toDateString());
document.write("<br>Time: " + today.toTimeString());
