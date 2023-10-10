var currentWinnings = 100;
var newWinnings = 0;

function rollDie() {
  let dieNumber = Math.floor(Math.random() * 6) + 1;
  document.getElementById("wText").innerHTML =
    "You rolled a " + dieNumber + "!";
  switch (dieNumber) {
    case 1:
      document.getElementById("wText").innerHTML +=
        "<br>It is good to be number 1! You doubled your winnings!";
      newWinnings = currentWinnings * 2;
      currentWinnings = newWinnings + currentWinnings;
      break;
    case 2:
      document.getElementById("wText").innerHTML +=
        "<br>Second best is not good enough. Roll again.";
      rollDie();
      break;
    case 3:
      document.getElementById("wText").innerHTML +=
        "<br>Three is not a lucky number at all. You lose all your winnings!";
      newWinnings = 0;
      currentWinnings = 0;
      break;
    case 4:
      document.getElementById("wText").innerHTML +=
        "<br>Four is lucky like a four-leafed clover. You won 400 points!";
      newWinnings = 400;
      currentWinnings = newWinnings + currentWinnings;
      break;
    case 5:
      document.getElementById("wText").innerHTML +=
        "<br>You are still in the game, but there is no change in your winnings.";
      newWinnings = 0;
      currentWinnings = newWinnings + currentWinnings;
      break;
    case 6:
      let winningNumber = 74;
      let pickedNumber = prompt("Pick a number between 1 and 100");
      if (pickedNumber == winningNumber) {
        document.getElementById("wText").innerHTML +=
          "<br>You are lucky indeed! You just multiplied your winnings by your chosen number!";
        newWinnings = currentWinnings * winningNumber;
        currentWinnings = newWinnings;
      } else if (pickedNumber < 50) {
        document.getElementById("wText").innerHTML +=
          "<br>You picked a rather low number, but you win those points.";
        newWinnings = parseFloat(pickedNumber);
        currentWinnings = newWinnings + currentWinnings;
      } else {
        document.getElementById("wText").innerHTML +=
          "<br>Good choice - but not what I was hoping for.";
        newWinnings = -10;
        currentWinnings = currentWinnings - 10;
      }
      break;
    default:
      console.log("error..");
      break;
  }

  updateWinnings();
}

function updateWinnings() {
  document.getElementById("bw").innerHTML =
    "Current Winnings: " + currentWinnings;
  document.getElementById("nw").innerHTML = "New Winnings: " + newWinnings;
}

updateWinnings();
