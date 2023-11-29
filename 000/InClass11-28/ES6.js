//Let vs Var
let x = 10;
if (x == 10) {
  let x = 20;
  document.getElementById("s1").innerHTML += "<p> // let" + "</p>";
  document.getElementById("s1").innerHTML += "<p>X where x=20: " + x + "</p>";
}

document.getElementById("s1").innerHTML += "<p>X default: " + x + "</p>";

//Let vs Var
var y = 10;
if (y == 10) {
  var y = 20;
  document.getElementById("s1").innerHTML += "<p> // var" + "</p>";
  document.getElementById("s1").innerHTML += "<p>Y where x=20: " + y + "</p>";
}

document.getElementById("s1").innerHTML += "<p>Y default: " + y + "</p>";

//default parameters
function multiply(a, b = 2) {
  return a * b;
}

let m1 = multiply(5);
let m2 = multiply(5, 8);

document.getElementById("s2").innerHTML +=
  "<p>Default parameter: " + m1 + "</br>" + "Two Parameters: " + m2 + "</p>";

//multiline
let t1 = "Hello, World!";
let t2 = "Hello, World!";
let t3 = `Hello, World!
            - love HTML
            - love CSS
            - love Java`;

document.getElementById("s8").innerHTML += t1 + t2 + t3;

//template literals
var firstName = "Gary";
var lastName = "Smith";

document.getElementById("s3").innerHTML += `${firstName} ${lastName}`;

//arrow functions
function fullName(f, l) {
  return `${f} ${l}`;
}

document.getElementById("s4").innerHTML += fullName(firstName, lastName);
//arrow function with one line in code block
fullName2 = (f, l) => `${f} ${l}`;

document.getElementById("s4").innerHTML +=
  "</br>" + fullName2(firstName, lastName);

//arrow function with multiline code block
fullName3 = (f, l) => {
  console.log(f, l);
  return `${f} ${l}`;
};

document.getElementById("s4").innerHTML +=
  "</br>" + fullName3(firstName, lastName);

//javascript classes

class Book {
  constructor(title, author, pubDate) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
  }
}

const jsBook = new Book("JavaScript and You", "Code Master", "2020");

document.getElementById(
  "s5"
).innerHTML += `Title: ${jsBook.title} </br>Author: ${jsBook.author} </br>Date Published: ${jsBook.pubDate}`;

//array destructuring
const course = ["N220", "Intro to JavaScript"];
let [courseNum, courseTitle] = course;

document.getElementById("s7_array").innerHTML += `${courseNum}: ${courseTitle}`;

let [title, surName] = ["Mr", "John", "Phillips", "Sr"];

document.getElementById("s7_obj").innerHTML += `${title}: ${surName}`;
