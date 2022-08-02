import './style.css';
import player from './players'
import _ from 'lodash';
import computer from './computer';
import { fightWar } from './war';

//declare objects
export const player1 = {};
export const playerAi = {};

//cacheDom
export let initialBoard = document.querySelector(".gameBoard");
export const aiBoard = document.querySelector(".aiBoard");
const sizeButtons = document.querySelector(".sizeButtons");
const sixBySix = document.getElementById("six");
const eightByEight = document.getElementById("eight");
const tenByTen = document.getElementById("ten");
const axis = document.getElementById("axis")
const beginGame = document.getElementById("startGame");


//initialize the DOM with the gameboard
function initializeDimensions() {
    sixBySix.addEventListener("click", () => {selectDimensions(6)});
    eightByEight.addEventListener("click", () => {selectDimensions(8)});
    tenByTen.addEventListener("click", () => {selectDimensions(10)});
}

initializeDimensions();

  ///////////////////////////////////////////////////////////////
 //Initialize the players depending on the selected dimensions//
///////////////////////////////////////////////////////////////
function selectDimensions(dimension) {

    const playerSet = player(dimension);
    const aiSet = computer(dimension)

    for (let p in playerSet) {
        player1[p] = playerSet[p];
    }

    for (let p in aiSet) {
        playerAi[p] = aiSet[p];
    }

    playerSet.playerBoard.board.forEach(element => {
        let boardSquare = document.createElement('div');
        let aiSquare = document.createElement('div');
        boardSquare.className = "boardSquare";
        boardSquare.textContent = element;
        aiSquare.className = "aiSquare";
        aiSquare.textContent = element;
        initialBoard.appendChild(boardSquare);
        aiBoard.appendChild(aiSquare);        
    });

    sizeButtons.style.display = "none"
    axis.style.display = "block"
    initialBoard.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    initialBoard.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    aiBoard.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    aiBoard.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    setPieces(player1, 0, dimension);
    setAiPieces(playerAi, 0, dimension);
};

  ///////////////////////////////////////////////////////////////////
 //Once initialized, have the player set their pieces on the board//
///////////////////////////////////////////////////////////////////
function setPieces(playerPicker, n, dimension) {
    let boardSquare = [...document.querySelectorAll(".boardSquare")];

    //Order in which the pieces will be places as denoted by n
    let shipsArray = [
        playerPicker.playerBoard.carrier, 
        playerPicker.playerBoard.battleship, 
        playerPicker.playerBoard.cruiser, 
        playerPicker.playerBoard.submarine,
        playerPicker.playerBoard.destroyer
    ]

    //Allow the player to switch between setting vertically or horizontally
    let skipper = 1;
    let pos = 0;

    axis.addEventListener("click", () => {
        if (skipper == 1 & pos == 0) {
            skipper = dimension;
            pos = 1;
        } else {
            skipper = 1;
            pos = 0;
        }
    })

    boardSquare.forEach(e => {
        ['click', 'mouseenter', 'mouseleave'].forEach(evt => {
            e.addEventListener(evt, function boardEvents() {
                //If the pieces are adjacent, allow them to be placed
                let elementSiblingArray = [];
    
                //The index jumps 1 if setting vertically, and 10 if setting horizontally
                for (let i = 0; i < shipsArray[n].size*skipper; i+=skipper) {
                    let index = boardSquare.indexOf(e);
                    elementSiblingArray.push(boardSquare[index + i]);
                }
                
                //Make sure each piece in the new array is actually adjacent
                const areAdjacent = elementSiblingArray.every(div => div.textContent[pos] === e.textContent[pos]);
    
                //Set the pieces and populate each of them into the board
                if (areAdjacent && evt == 'mouseenter') {
                    elementSiblingArray.forEach(square => {
                        square.className = 'hoverSquare';
                    })
                } else if (areAdjacent && evt == 'mouseleave') {
                    elementSiblingArray.forEach(square => {
                        square.className = 'boardSquare';
                    })
                } else if (areAdjacent && evt == 'click') {
                    elementSiblingArray.forEach(square => {
                        square.style.background = "rgb(210, 215, 211, 0.4)";
                        playerPicker.playerBoard.populateBoard(square.textContent, shipsArray[n]);
                        square.textContent = shipsArray[n].title;
                        square.style.pointerEvents = "none";
                    })
    
                    //advance to the next piece to be placed
                    n++;

                    if (n > 4) {
                        //remove event listeners by cloning the baord
                        let oldBoard = initialBoard;
                        let newBoard = oldBoard.cloneNode(true);
                        oldBoard.parentNode.removeChild(oldBoard);
                        document.getElementById("boards").prepend(newBoard);

                        //Set the original gameBoard to the newly cloned one
                        initialBoard = newBoard;

                        //display start game button
                        beginGame.style.display = 'block';
                        axis.style.display = 'none';
                    }
                }
            })
        })
    })
}

  ////////////////////////////////////////////////////////////////////
 //Use a recursive function to randomly place the AI's board pieces//
////////////////////////////////////////////////////////////////////
function setAiPieces(playerPicker, n, dimension) {
    //exit recursion
    if (n === 5) {
        return;
    }

    //Filter an array of all the div elements using a regex of the coordinates
    let aiSquares = [...document.querySelectorAll(".aiSquare")];
    let regex = /^[A-J]\d/;

    let filteredAiArr = aiSquares.filter(e => regex.test(e.textContent));

    //Order in which the pieces will be places as denoted by n
    let shipsArray = [
        playerPicker.playerBoard.carrier, 
        playerPicker.playerBoard.battleship, 
        playerPicker.playerBoard.cruiser, 
        playerPicker.playerBoard.submarine,
        playerPicker.playerBoard.destroyer
    ]

    //Randomly select an index to place ships
    let index = _.random(filteredAiArr.length - shipsArray[n].size);
    let randomIndex = aiSquares.indexOf(filteredAiArr[index]);

    //Allow the ai to randomly switch between setting vertically or horizontally
    let randomVal = _.random(100);
    let skipper;
    let pos;

    if (randomVal > 50) {
        if (randomIndex < (aiSquares.length - dimension) && shipsArray[n].size == 2) {
            skipper = dimension;
            pos = 1;
        } else if (randomIndex < (aiSquares.length - (dimension * 2)) && shipsArray[n].size == 3) {
            skipper = dimension;
            pos = 1;
        } else if (randomIndex < (aiSquares.length - (dimension * 3)) && shipsArray[n].size == 4) {
            skipper = dimension;
            pos = 1;
        } else if (randomIndex < (aiSquares.length - (dimension * 4)) && shipsArray[n].size == 5) {
            skipper = dimension;
            pos = 1;
        } else {
            skipper = 1;
            pos = 0;
        }
    } else {
        skipper = 1;
        pos = 0;
    }

    //Iterate through the board to find viable spaces and fill with a dummy div if necessary
    let c = aiSquares[randomIndex].textContent[pos];
    let elementSiblingArray = [];
    let dummy = document.createElement("div");
    dummy.textContent = "dummy";
    

    for (let i = 0; i < shipsArray[n].size*skipper; i+=skipper) {
        let pos1 = aiSquares[randomIndex+i].textContent[pos];

        if (pos1 === c) {
            elementSiblingArray.push(aiSquares[randomIndex + i]);
        } else if (pos1 !== c) {
            elementSiblingArray.push(dummy)
        }
    }

    //Make sure each piece in the new array is actually adjacent
    const areAdjacent = elementSiblingArray.every(div => div.textContent[pos] === c && regex.test(div.textContent) && div !== undefined);

    //Set the pieces and populate each of them into the board
    if (!areAdjacent) {
        return setAiPieces(playerAi, n, dimension);
    } else if (areAdjacent) {
        elementSiblingArray.forEach(square => {
            playerPicker.playerBoard.populateBoard(square.textContent, shipsArray[n]);
            square.textContent = shipsArray[n].title;
        })

        //advance to the next piece to be placed
        return setAiPieces(playerPicker, n+1, dimension);
    }
}