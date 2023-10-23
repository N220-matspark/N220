var tool;

function leaveRoom() {
  alert("You choose to leave the room. Chicken.");
}
function enterRoom(){
    alert("You chose to enter the room and it's dark");
    if(tool.toUpperCase()=="SHOVEL"){
        alert("the shovel came in handy. You knocked out the beast by hitting him in the head with the " + tool + ".");
    } else if (tool.toUpperCase()=="LADDER"){
        alert("The ladder did not help you much, you died."); 
    } else {
        alert("The flash light made the beast notice you, you died.");
    }
}

function startGame() {
  var user = prompt("Welcome to my adventure game. Please enter your name.");
  alert(
    "Welcome, " +
      user +
      " to my campus adventure. Are you ready? if so click ok."
  );

  tool = prompt(
    "To begin your adventure please select your tool: shovel, ladder, flashlight"
  );
  let room = prompt(
    "You walk through the campus center and hear a loud, meancing growl coming from a room around the corner. Do you ENTER or do you LEAVE?"
  );
  

  if (room.toUpperCase() == "LEAVE") {
    leaveRoom();
  } else {
    enterRoom();
  }
}
