
var Number1 = Math.floor(Math.random() * 6) + 1; //1-6

var DiceImage = "dice" + Number1 + ".png"; 

var ImageSource = "images/" + DiceImage; 

var Dice1 = document.querySelectorAll("img")[0];

Dice1.setAttribute("src", ImageSource);


var Number2 = Math.floor(Math.random() * 6) + 1;

var ImageSource2 = "images/dice" + Number2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", ImageSource2);


//If player 1 wins
if (Number1 > Number2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (Number2 > Number1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
