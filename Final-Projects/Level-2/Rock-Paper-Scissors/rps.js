let gameContainer = document.getElementById("gameContainer");
let playGameBtn = document.getElementById("playgamebtn");
let playGameContainer = document.getElementById("playGameContainer");
let resultText = document.getElementById("resultText");
let player1PNG = document.getElementById("player1Result");
let player2PNG = document.getElementById("player2Result");
let gameCounter = 1;
function playGame() {
  const choices = ["rock", "paper", "scissors"];

  let player1Result = choices[Math.floor(Math.random() * choices.length)];
  let player2Result = choices[Math.floor(Math.random() * choices.length)];

  player1PNG.innerHTML = `<img src="${player1Result}.png" >`;
  player2PNG.innerHTML = `<img src="${player2Result}.png" >`;

  let winner = findWinner(player1Result, player2Result);
  gameHistory(gameCounter, winner);
  gameCounter++;
}

function findWinner(one, two) {
  if (one == two) {
    resultText.innerHTML = "It's a tie! Play again.";
    return "Tie";
  } else if (
    (one == "rock" && two == "scissors") ||
    (one == "paper" && two == "rock") ||
    (one == "scissors" && two == "paper")
  ) {
    resultText.innerHTML = "Player 1 wins! Play again.";
    return "Player 1";
  } else {
    resultText.innerHTML = "Player 2 wins! Play again.";
    return "Player 2";
  }
}

function gameHistory(gameCount, result) {
  let table = document.getElementById("resultsTable");
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);

  cell1.innerHTML = `${gameCount}`;
  cell2.innerHTML = result;
}

playGameBtn.addEventListener("click", playGame);
