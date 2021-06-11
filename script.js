'use strict';
const rollBtn = document.querySelector(".btn--roll");
const holdScoreBtn = document.querySelector(".btn--hold");
const resetBtn = document.querySelector(".btn--new");
const diceImge = document.querySelector(".dice");
const currentScore = document.querySelectorAll(".current-score");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const score = document.querySelectorAll(".score");
const allPlayers = document.querySelectorAll(".player");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");




//////////////////////////////////////////////
const activePlayer = "player--active";
const winnerPlayer = "player--winner"
let currentScoreVar = 0, winner = false;
const changePlayer = function () {
    player0.classList.toggle(activePlayer);
    player1.classList.toggle(activePlayer);
    currentScoreVar = 0
    currentScore.forEach(scr => scr.textContent = 0);
}


// start game and get score 
diceImge.classList.add("hidden");

score.forEach(scr => scr.textContent = 0);

rollBtn.addEventListener("click", function (event) {

    if (winner != true) {
        const diceNumber = Math.round(Math.random() * 6);
        console.log(diceNumber);
        if (diceNumber != 0) {
            diceImge.setAttribute("src", `dice-${diceNumber}.png`);
            diceImge.classList.remove("hidden");
            currentScoreVar += diceNumber;
            if (player0.classList.contains(activePlayer)) {
                current0.textContent = currentScoreVar
            } else {
                current1.textContent = currentScoreVar;
            }


        } else { // if rnd number was 0 change the player 

            changePlayer();

        }

    }
});




//hold score and change the player
holdScoreBtn.addEventListener("click", function () {

    if (Number(score1.textContent) < 20 && Number(score0.textContent) < 20 && winner != true) {

        if (player0.classList.contains(activePlayer)) score0.textContent = Number(score0.textContent) + currentScoreVar;
        else score1.textContent = Number(score1.textContent) + currentScoreVar;
        if (Number(score0.textContent) >= 20 || Number(score1.textContent) >= 20) { //if one of the players score reach to 20 active the winner player and end game


            Number(score0.textContent) >= 20 ? player0.classList.add(winnerPlayer) : player1.classList.add(winnerPlayer);
            winner = true;

        } else {
            changePlayer();
        }




    } else {

        Number(score0.textContent) >= 20 ? player0.classList.add(winnerPlayer) : player1.classList.add(winnerPlayer);
        winner = true;


    }






});


//resteBtn for new Game

resetBtn.addEventListener("click", function () {

    
    currentScoreVar = 0;
    currentScore.forEach(scr => scr.textContent = 0);
    score.forEach(score => score.textContent = 0);
    allPlayers.forEach(player => {player.classList.remove(winnerPlayer); player.classList.remove(activePlayer)});
    player0.classList.add(activePlayer);
    diceImge.classList.add("hidden");
    winner = false;



});


