//Bank Account
let acct = 45.67;
let toy = 45.99;
let buyToy = acct > toy;

if (buyToy) {
  document.getElementById("bank").innerHTML = "We can buy the toy";
} else {
  document.getElementById("bank").innerHTML = "We can NOT buy the toy";
}

//Birthday Month
const today = new Date();
let month = parseFloat(today.getMonth() + 1);

if (month == 12) {
  document.getElementById("birthday").innerHTML = "It is your birthday month";
} else {
  document.getElementById("birthday").innerHTML =
    "It is NOT your birthday month";
}

//voting age
let ageTxt;
function checkAge() {
  let myAge = document.getElementById("age").value;

  if (myAge < 18) {
    ageTxt = "You are not old enough to vote.";
  } else if (myAge == 18) {
    ageTxt = "Congrats you can finally vote!";
  } else {
    ageTxt = "You can vote.";
  }

  document.getElementById("voteAge").innerHTML = ageTxt;
}

//Time of Day Greeting
let todayHour = today.getHours();
var timeTxt = document.getElementById("myTime");

if (todayHour < 12) {
  timeTxt.innerHTML = "Good Morning";
} else if (todayHour > 12 && todayHour < 16) {
  timeTxt.innerHTML = "Good Afternoon";
} else if (todayHour > 16 && todayHour < 20) {
  timeTxt.innerHTML = "Good Evening";
} else {
  timeTxt.innerHTML = "Goodnight";
}

//Grades
let midterm = (78 / 100) * 100;
let final = (87 / 100) * 100;
let myTotal = 47 + 62 + midterm + final;
let classAvg = (myTotal / 350) * 100;

var msgTxt = document.getElementById("msg");
var testTxt = document.getElementById("textMsg");

if (midterm > 50) {
  msgTxt.innerHTML = "You have passed the midterm.";
} else {
  msgTxt.innerHTML = "You have failed the midterm.";
}

if (midterm > 50 && final > 72) {
  msgTxt.innerHTML += "<br>You have passed the class.";
} else {
  msgTxt.innerHTML += "<br>You have failed the class.";
}
console.log(classAvg);
if ((midterm > 50 && final > 72) || classAvg > 80) {
  msgTxt.innerHTML += "<br>The class is complete.";
} else {
  msgTxt.innerHTML += "<br>The class is incomplete.";
}

//random number
function newNum() {
  range = 20;
  ranNum = Math.floor(Math.random() * range) + 1;
  document.getElementById("rNum20").innerHTML = ranNum;
}

//Dice roll game
function rollDie() {
  let dieNum = Math.floor(Math.random() * 6) + 1;
  switch (dieNum) {
    case 1:
      dieImg = "die_face_1.png";
      break;
    case 2:
      dieImg = "die_face_2.jpg";
      break;
    case 3:
      dieImg = "die_face_3.png";
      break;
    case 4:
      dieImg = "die_face_4.png";
      break;
    case 5:
      dieImg = "die_face_5.png";
      break;
    case 6:
      dieImg = "die_face_6.png";
      break;
    default:
      console.log("error..");
      break;
  }

  document.getElementById("dice_1").innerHTML =
    '<img src="images/' + dieImg + '"/>';

  let dieNum2 = Math.floor(Math.random() * 6) + 1;
  switch (dieNum2) {
    case 1:
      dieImg = "die_face_1.png";
      break;
    case 2:
      dieImg = "die_face_2.jpg";
      break;
    case 3:
      dieImg = "die_face_3.png";
      break;
    case 4:
      dieImg = "die_face_4.png";
      break;
    case 5:
      dieImg = "die_face_5.png";
      break;
    case 6:
      dieImg = "die_face_6.png";
      break;
    default:
      console.log("error..");
      break;
  }

  document.getElementById("dice_2").innerHTML =
    '<img src="images/' + dieImg + '"/>';
}

//Seasons of the Year
// let month from line 14
let seasonTxt = document.getElementById("season");

switch (true) {
  case month == 12 || month <= 2:
    seasonTxt.innerHTML = "It's Winter.";
    break;
  case month >= 3 && month <= 5:
    seasonTxt.innerHTML = "It's Spring";
    break;
  case month >= 6 && month <= 8:
    seasonTxt.innerHTML = "It's Summer";
    break;
  case month >= 9 && month <= 11:
    seasonTxt.innerHTML = "It's Fall";
    break;
  default:
    seasonTxt.innerHTML = "Invalid";
}
