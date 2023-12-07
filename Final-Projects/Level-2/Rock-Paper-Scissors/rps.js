let gameContainer = document.getElementById("gameContainer");
let playGameBtn = document.getElementById("playgamebtn");
let playGameContainer = document.getElementById("playGameContainer");
function playGame() {
  playGameContainer.style.display = "none";
  gameContainer.style.display = "flex";
  gameContainer.style.height = "100vh";
}

playGameBtn.addEventListener("click", playGame);
