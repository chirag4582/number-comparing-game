// Iteration 5: Store the player score and display it on the game over screen
let score = localStorage.getItem("score");
console.log(score);

const scoreboard = document.getElementById("score-board");

scoreboard.innerHTML=score;

const playagain = document.getElementById('play-again-button');

playagain.onclick = display;

function display(){window.location.href="game.html"};