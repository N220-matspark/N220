function changeTxt() {
  document.getElementById("changeTxt").innerHTML =
    "This text has been changed.";
}
changeTxt();

function noPram() {
  document.write("This function does not take parameters.");
}
noPram();

var greet = function () {
  console.log("Hello, World");
};
greet();

var favBand = "Super";
function favoriteBand(favBand) {
  document.getElementById("favBand").innerHTML = favBand;
}
favoriteBand(favBand);

function myName(first) {
  console.log(first);
}
myName("Matt");
myName("Sparkman");

var recHeight = 20;
var recWidth = 34;

function recPerm(h, w) {
  let perimeter = 2 * h + 2 * w;
  return perimeter;
}
document.getElementById("panswer").innerHTML =
  recPerm(recHeight, recWidth) + " ft.";

function calcArea() {
  let h = document.getElementById("height").value;
  let w = document.getElementById("width").value;
  var area = h * w;
  document.getElementById("answer").innerHTML = area;
}

function helloWorld(world) {
  return "hello " + world;
}
console.log(helloWorld("Mars"));

function test() {
  return true;
  return false;
}
console.log(test());

function totalRec(h,w){
  let perm = recPerm(h,w);
  let area = h*w;
  let recInfo = [perm, area];
  return recInfo
}

document.getElementById('multiAnswer').innerHTML = "Perimeter: " + totalRec(recHeight,recWidth)[0] + " ft. " + "<br>Area: " + totalRec(recHeight,recWidth)[1] + " square ft.";

function myFunction(){
  window.alert('Who goes there?');
}

function wizard(name,occupation){
  document.getElementById('future').innerHTML = "Welcome, " + name+", the " + occupation+"!";
}

function addItem(){
  let item = prompt("Add Item:");
  console.log(item);
  window.alert("You added "+item+" to your list");
}