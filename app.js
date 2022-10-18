// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
const playbutton = document.getElementById('play-button');

playbutton.addEventListener('click',gameDisplay)

function gameDisplay(){
    window.location.href = "game.html"
}