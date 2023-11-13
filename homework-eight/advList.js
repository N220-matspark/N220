function addTrashIcon() {
  var listItems = document.querySelectorAll(".codeList li");
  var totalItems = listItems.length;

  for (var i = 0; i < totalItems; i++) {
    var trashIcon = document.createElement("img");

    trashIcon.setAttribute(
      "src",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png"
    );

    trashIcon.classList.add("listIcon");
    listItems[i].appendChild(trashIcon);
  }
}

addTrashIcon();

function changeProp(e) {
  var target = getTarget(e);
  var targetParent = target.parentNode;

  if (targetParent.tagName == "LI") {
    targetParent.remove();
  } else if (targetParent.tagName == "UL") {
    if (target.classList.contains("selected")) {
      target.classList.remove("selected");
    } else {
      target.classList.add("selected");
    }
  }
}

codeBox.addEventListener("click", changeProp);
