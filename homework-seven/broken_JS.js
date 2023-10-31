let playerChoice = document.getElementsByClassName("choice");
let CompArray = ["Rock", "Paper", "Scissors"];
let innerscore = 0;

function RPS(numb) {
  console.log("user " + numb);
  var CompDecision = CompArray[Math.floor(Math.random() * CompArray.length)];

  console.log("Comp " + CompDecision);
  document.getElementById("resultDecision").innerHTML =
    "The computer chose: " + CompDecision;

  if (numb == 0) {
    if (CompDecision == "Paper") {
      innerscore -= 1;
    }
    if (CompDecision == "Scissors") {
      innerscore += 1;
    }
  }

  if (numb == 1) {
    if (CompDecision == "Rock") {
      innerscore += 1;
    }
    if (CompDecision == "Scissors") {
      innerscore -= 1;
    }
  }

  if (numb == 2) {
    if (CompDecision == "Rock") {
      innerscore -= 1;
    }
    if (CompDecision == "Paper") {
      innerscore += 1;
    }
  }
  if (numb == 3) {
    innerscore -= 0.5;
    console.log("find");
  }
  document.getElementById("score").innerHTML = "Score: " + innerscore;

  console.log("score " + innerscore);
}
