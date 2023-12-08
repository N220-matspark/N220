let registerForm = document.getElementById("registerForm");
let loginForm = document.getElementById("loginForm");
let passwordMsg = document.getElementById("passwordMsg");
let registerMsg = document.getElementById("registerMsg");
let loginMsg = document.getElementById("loginMsg");

let users = [];

function registration() {
  event.preventDefault();
  let username = document.getElementById("usernameInput").value;
  let password = document.getElementById("passwordInput").value;
  let rePassword = document.getElementById("rePasswordInput").value;

  if (!(password.length >= 8 && password.length <= 10)) {
    passwordMsg.innerHTML = "Must be between 8-10 characters.";
    passwordMsg.style.display = "flex";
    return;
  }

  if (password !== rePassword) {
    passwordMsg.innerHTML = "The passwords must match.";
    passwordMsg.style.display = "flex";
    return;
  }

  users.push({ username, password });

  passwordMsg.innerHTML = "";
  passwordMsg.style.display = "none";
  registerMsg.innerHTML = `Thank you, ${username}, for registering.`;
  console.log(users);
}

registerForm.addEventListener("submit", registration);

function login() {
  event.preventDefault();

  let loginUsername = document.getElementById("loginUsernameInput").value;
  let loginPassword = document.getElementById("loginPasswordInput").value;

  if (
    users.some(
      (user) => user.username == loginUsername && user.password == loginPassword
    )
  ) {
    loginMsg.style.display = "flex";
    loginMsg.innerHTML = "Congratulations! You are logged in.";
  } else {
    loginMsg.style.display = "flex";
    loginMsg.innerHTML =
      "Your login information does not match those on file. Please try again.";
  }
}

loginForm.addEventListener("submit", login);
