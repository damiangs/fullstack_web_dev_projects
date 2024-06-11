let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDice1 = "./images/dice" + randomNumber1 + ".png";
let randomDice2 = "./images/dice" + randomNumber2 + ".png";

let dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src", randomDice1);

let dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src", randomDice2);

let title = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  title.innerHTML = "🚩Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  title.innerHTML = "Player 2 wins!🚩";
} else {
  title.innerHTML = "Draw!";
}
