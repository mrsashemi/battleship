import { player1, playerAi } from ".";
import _ from 'lodash';

//cache dom
const beginGame = document.getElementById("startGame");

export function fightWar() {
    beginGame.addEventListener('click', () => {
        player1.isTurn = true;
        beginGame.style.display = 'none';
        playerStrike();
    })
}

fightWar();

function playerStrike() {
    document.querySelector(".aiBoard").style.pointerEvents = 'auto';
    let aiSquares = [...document.querySelector(".aiBoard").children];
    aiSquares.forEach(e => {
        if (player1.isTurn) {
            e.addEventListener('click', () => {
                console.log(playerAi.isTurn);
                //Find the index and plug it into the computers gameBoard receiveAttack function
                let index = aiSquares.indexOf(e);
                let c = playerAi.playerBoard.board[index];
                let coordinates = c.split(' ');

                (coordinates.length < 2) ? player1.attackEnemy(playerAi, coordinates[0], "empty") : 
                player1.attackEnemy(playerAi, coordinates[0], playerAi.playerBoard[coordinates[1]]);
                
                //Record results
                e.style.background = "pink";
                e.textContent = playerAi.playerBoard.board[index];

                //Delay enemy strike
                setTimeout(() => {
                    computerStrike();
                }, 500)
            })
        }
    })
}



function computerStrike() {
    if (playerAi.isTurn == true) {
        document.querySelector(".aiBoard").style.pointerEvents = 'none';
        let playerSquares = [...document.querySelector(".gameBoard").children];
        let index = playerAi.attackEnemy(player1);
        playerSquares[index].textContent = player1.playerBoard.board[index];
        playerSquares[index].style.background = "aqua";
        playerStrike();
    }
}


