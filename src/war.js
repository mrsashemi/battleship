import { player1, playerAi, initialBoard, aiBoard } from ".";

//cache dom
const beginGame = document.getElementById("startGame");
const reset = document.getElementById("resetGame");
const result = document.querySelector(".results");
const sizeButtons = document.querySelector(".sizeButtons");

export function fightWar() {
    beginGame.addEventListener('click', () => {
        player1.isTurn = true;
        reset.style.display = 'none';
        beginGame.style.display = 'none';
        playerStrike();
    })
}

fightWar();

function playerStrike() {
    aiBoard.style.pointerEvents = 'auto';
    let aiSquares = [...aiBoard.children];
    aiSquares.forEach(e => {
        if (player1.isTurn) {
            e.addEventListener('click', () => {
                //Find the index and plug it into the computers gameBoard receiveAttack function
                let index = aiSquares.indexOf(e);
                let c = playerAi.playerBoard.board[index];
                let coordinates = c.split(' ');
                
                //Check if coordinates include a ship name
                (coordinates.length < 2) ? player1.attackEnemy(playerAi, coordinates[0], "empty") : 
                player1.attackEnemy(playerAi, coordinates[0], playerAi.playerBoard[coordinates[1]]);
                
                //Record results
                e.style.color = "white";
                e.textContent = playerAi.playerBoard.board[index];

                if (e.textContent === "missed") {
                    e.style.background = "rgba(0, 0, 255, 0.25)";
                } else {
                    e.style.background = "rgba(255, 0, 0, 0.25)";
                }

                player1.checkWin(playerAi);

                if (player1.isWinner) {
                    reset.style.display = 'block';
                    result.textContent = `Player 1, ${player1.checkWin(playerAi)}`;
                    resetGame();
                } else {
                    aiBoard.style.pointerEvents = 'none';

                    //Delay enemy strike
                    setTimeout(() => {
                        computerStrike();
                    }, 500)
                }
            })
        }
    })
}


//the AI Object already has the function built out to pick and submit a random index
function computerStrike() {
    if (playerAi.isTurn == true) {
        aiBoard.style.pointerEvents = 'none';
        let playerSquares = [...initialBoard.children];
        let index = playerAi.attackEnemy(player1);

        console.log(index);
        console.log(playerSquares[index]);
        playerSquares[index].textContent = player1.playerBoard.board[index];
        
        if (playerSquares[index].textContent === "missed") {
            playerSquares[index].style.background = "rgba(0, 0, 255, 0.25)";
        } else {
            playerSquares[index].style.background = "rgba(255, 0, 0, 0.25)";
        }

        playerAi.checkWin(player1);

        if(playerAi.isWinner) {
            reset.style.display = 'block';
            result.textContent = `Computer, ${playerAi.checkWin(player1)}`;
            resetGame();
        } else {
            aiBoard.style.pointerEvents = 'auto';
            playerStrike();
        }
    }
}


//Function to reset the game

export function resetGame() {
    reset.addEventListener('click', () => {
        while(initialBoard.firstChild) {
            initialBoard.removeChild(initialBoard.firstChild);
            aiBoard.removeChild(aiBoard.firstChild);
        }

        for (let prop in player1) {
            if (player1.hasOwnProperty(prop)) {
                delete player1[prop];
            }
        }

        for (let prop in playerAi) {
            if (playerAi.hasOwnProperty(prop)) {
                delete playerAi[prop];
            }
        }


        result.textContent = '';
        beginGame.style.display = 'none';
        reset.style.display = 'none';
        sizeButtons.style.display = 'flex';
    })
}


