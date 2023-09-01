var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var p1ImageRandom = "./images/dice" + randomNumber1 + ".png";
var p2ImageRandom = "./images/dice" + randomNumber2 + ".png";
var image1 = document.querySelectorAll("img")[0];
console.log(p1ImageRandom);
image1.setAttribute("src", p1ImageRandom);
document.querySelector(".img2").setAttribute("src", p2ImageRandom);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
