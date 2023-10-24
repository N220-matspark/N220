function startGame() {
  var user = prompt("Welcome to my story. Please enter your name.");
  alert("Welcome, " + user + ". Are you ready?");
  let lottery = prompt(
    "You and your friend are walking into the gas station for some Coca Cola slushies. You see the lottery has gotten up to 2 billion dollars! While you are there, you might as well buy a lottery ticket, right? YES / NO"
  );

  if (lottery.toUpperCase() == "YES") {
    boughtTicket();
  } else {
    noTicket();
  }
}

function boughtTicket() {
  alert("You bought the lottery ticket and went home.");
  alert(
    "You are watching the lottery numbers being drawn the next week and you can't believe it. All of the numbers match!"
  );
  let lotteryWin = prompt(
    "Do you let your friends and family know you won? YES / NO"
  );

  if (lotteryWin.toUpperCase() == "YES") {
    tellEveryone();
  } else {
    tellNoOne();
  }
}

function tellEveryone() {
  alert(
    "You call your mom then and post a story on instagram with your winning ticket."
  );
  let help = prompt(
    "In the following days you begin to get calls and texts from people you haven't spoken to in years, asking for money for all sorts of reasons. Do you send them some money? YES/ NO"
  );

  if (help.toUpperCase() == "YES") {
    helpEveryone();
  } else {
    noHelpEveryone();
  }
}

function tellNoOne() {
  alert(
    "You quietly collect your winnings. You have no money than you know what to do with. You are thinking about all of the things you can buy and you go to a car dealership."
  );
  let buy = prompt(
    "Do you buy a super car worth $300,000, or do you buy the cheaper car that is more modest? SUPERCAR / CHEAP"
  );

  if (buy.toUpperCase() == "SUPERCAR") {
    supercar();
  } else {
    cheapCar();
  }
}

function supercar() {
  alert(
    "You bought the car of your dreams and you post it all over social media, showing it off. Your friends and family begin texting and calling you asking you how you could've possibly afforded that car."
  );
  alert(
    "You can't come up with a good enough excuse and before you know it everyone knows you've won the lottery. No more peace and quiet for you."
  );
}

function cheapCar() {
  alert(
    "You bought a cheaper car that does everything you could want. When you visit your parents for the holidays you let them know you have won the lottery."
  );
  alert(
    "You retire your parents and buy a mansion in LA. You go on to live out your dreams of starting a business, and starting a family."
  );
}

function helpEveryone() {
  alert(
    "Before you know it you are already out millions of dollars, giving to others for their needs. You feel good inside, but you also feel like some of them took advantage of you."
  );
  alert(
    "Someone reaches out to you claiming to be your cousin asking for a million dollars. Feeling done with giving others your money, you refused."
  );
  alert(
    "As you a sitting on your couch watching a movie later that evening, you hear a window break and four masked men break through your door. You are then tied up and robbed for all of your winnings."
  );
}

function noHelpEveryone() {
  alert(
    "You refuse to give money to anyone but your mother and father. You leave the country and live in Europe off the grid for a couple of months."
  );
  alert(
    "You come back home, and invest your winnings and retire, living comfortably for the rest of your life."
  );
}

function noTicket() {
  alert(
    "You did not buy the lottery ticket. Your friend bought one and you both go home."
  );
  alert(
    "You and you friend are watching a movie the next week and your friend seems to be fixated on his phone."
  );
  alert(
    "Damn! I was so close. I guess I wasn't meant to win. Your friend throws his lottery ticket in your trashcan and he leaves after the movie is over."
  );
  let friendTicket = prompt(
    "Curious, you check the numbers yourself and match them with the ticket to see how close he was. Wait a minute, all of the numbers match! Do you call your friend, or keep this to yourself? CALL / KEEP"
  );

  if (friendTicket.toUpperCase() == "CALL") {
    callFriend();
  } else {
    noCallFriend();
  }
}

function callFriend() {
  let acceptWinnings = prompt(
    "You call your friend and give him the good news! He is very thankful you called him and wants to give you 1/3 of the winnings. Do you accept? YES / NO"
  );

  if (acceptWinnings.toUpperCase() == "YES") {
    takeOffer();
  } else {
    denyOffer();
  }
}

function noCallFriend() {
  alert("You take the winnings for yourself and you buy a new car and home.");
  let snakeFriend = prompt(
    "Your friend that originally bought the ticket is confused on how you were able to afford this, and confronts you about it. Do you tell him that you took his lottery winnings? YES / NO"
  );
  if (snakeFriend.toUpperCase() == "YES") {
    tellHim();
  } else {
    dontTellHim();
  }
}

function takeOffer() {
  alert(
    "You accept your friend's offer and take the money. You invest it well and you make an amazing yearly income from the money."
  );
  alert(
    "Your friend ends up going bankrupt after 10 years. He asks you for the money he gave you back and you refuse to give it to him, but offer to help him out. He lives with you for a while, but one day you come home and all of your belongings are gone and your friend has left the country."
  );
}

function denyOffer() {
  alert(
    "You deny his offer to give you part of his winnings. Hard times fall onto you months later and you ask him for some of the winnings and he refused to give any money to you."
  );
  alert("You both have a falling out and you never speak to him again.");
}

function tellHim(){
  alert("You tell him that he actually had the winning numbers on his lottery ticket and you cashed it in.")
  alert("You feel bad and give him most of the winnings back. You and your friend build a brotherhood off of these circumstances and you both go on to start a multibillion dollar corporation.")
}

function dontTellHim() {
  alert(
    "You tell your friend that you have no idea what he is talking about. Your friend then ends up building a case against you and attempts to sue you for everything you have."
  );
  alert(
    "You bribe the judge and you take all of his winnings. You plan on never speaking to him again and you live in luxury while your friend is dirt poor."
  );
  alert(
    "2 years go by. You are awoken by a loud crash at your home in the middle of the night. You walk down stairs and you see a man with a mask on. You hear a loud bang."
  );
  alert(
    "You wake up from a coma 6 years later and you find out your wife left you for your old friend, and your children think of him as their father. You go back to your mansion with no family, but you do have the money you took. Was it worth it?"
  );
}
