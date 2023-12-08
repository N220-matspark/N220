let flipCoinBtn = document.getElementById("flipCoinBtn");
let coinFlipImg = document.getElementById("coinflipResult");
let resultTxt = document.getElementById("headsortails");
let ratioTxt = document.getElementById("ratioText");
let resultsTable = document.getElementById("resultsTable");
let gameCounter = 1;

let headsCount = 0;
let tailsCount = 0;

function flipCoin() {
  const coin = ["Heads", "Tails"];
  let coinFlipResult = coin[Math.floor(Math.random() * coin.length)];
  let ratio;
  if (headsCount == 0 || tailsCount == 0) {
    ratio = 0;
  } else {
    ratio = headsCount / tailsCount;
    console.log(ratio);
  }

  if (coinFlipResult == "Heads") {
    headsCount++;
    console.log("Heads Count: " + headsCount);
  }

  if (coinFlipResult == "Tails") {
    tailsCount++;
    console.log("Tails Count: " + tailsCount);
  }

  coinFlipImg.innerHTML = `<img src="${coinFlipResult}.png" >`;

  resultTxt.innerHTML = `It's ${coinFlipResult}`;
  ratioTxt.innerHTML = `Heads/Tails Ratio: ${ratio.toFixed(2)}`;

  gameHistory(gameCounter, coinFlipResult);
  gameCounter++;
}

function gameHistory(gameCount, result) {
  let row = resultsTable.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);

  cell1.innerHTML = `${gameCount}`;
  cell2.innerHTML = result;
}

flipCoinBtn.addEventListener("click", flipCoin);
