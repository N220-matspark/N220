var passForm = document.forms[0];

var passBtn = passForm.getElementsByTagName("img")[0];

var imgSrc = passBtn.getAttribute("src");

var hidePassImg = imgSrc.indexOf("hide");

function togglePasswordVisibility() {
  let passInput = document.getElementById("pass").getAttribute("type");

  if (passInput == "password") {
    document.getElementById("pass").setAttribute("type", "text");
    imgSrc(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/showPassIcon.png"
    );
  } else {
    document.getElementById("pass").setAttribute("type", "password");
    imgSrc(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/hidePassIcon.png"
    );
  }
}

passBtn.addEventListener("click", togglePasswordVisibility);
