var randomno1 = Math.floor ( Math.random() * 6 ) + 1;
var randomDiceImage1 = "dice" + randomno1 + ".png";
var selectImage1 = "images/" + randomDiceImage1;
var image1 = document.querySelectorAll ("img")[0];
image1.setAttribute ("src" , selectImage1);

var randomno2 = Math.floor( Math.random() * 6 ) + 1;
var randomDiceImage2 = "dice" + randomno2 + ".png";
var selectImage2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll ("img")[1];
image2.setAttribute ("src" , selectImage2);

if (randomno1 === randomno2) {
   document.querySelector("h1").innerHTML = "Tie";
} else if (randomno1 < randomno2) {
   document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
   document.querySelector("h1").innerHTML = "Player 1 Wins";
}
