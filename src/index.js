import './style.css';
import player from './players'

//declare objects
const player1 = {};
const playerAi = {};

//cacheDom
const initialBoard = document.querySelector(".gameBoard");
const sizeButtons = document.querySelector(".sizeButtons");
const sixBySix = document.getElementById("six");
const eightByEight = document.getElementById("eight");
const tenByTen = document.getElementById("ten");


//initialize the DOM with the gameboard
function initializeDimensions() {
    sixBySix.addEventListener("click", () => {selectDimensions(6)});
    eightByEight.addEventListener("click", () => {selectDimensions(8)});
    tenByTen.addEventListener("click", () => {selectDimensions(10)});
}

initializeDimensions();

//Initialize the players depending on the selected dimensions
function selectDimensions(dimension) {
    const playerSet = player(dimension);

    for (let p in playerSet) {
        player1[p] = playerSet[p];
        playerAi[p] = playerSet[p];
    }

    playerSet.playerBoard.board.forEach(element => {
        let boardSquare = document.createElement('div');
        boardSquare.className = "boardSquare";
        boardSquare.textContent = element;
        initialBoard.appendChild(boardSquare);
    });

    sizeButtons.style.display = "none"
    initialBoard.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    initialBoard.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`
    setPieces(player1, 0);
};

//Once initialized, have the player and AI set their pieces on the board
function setPieces(playerPicker, n) {
    let boardSquare = document.querySelectorAll(".boardSquare");

    //Order in which the pieces will be places as denoted by n
    let shipsArray = [
        playerPicker.playerBoard.carrier, 
        playerPicker.playerBoard.battleship, 
        playerPicker.playerBoard.cruiser, 
        playerPicker.playerBoard.submarine,
        playerPicker.playerBoard.destroyer
    ]

    boardSquare.forEach(e => {
        e.addEventListener("click", () => {
            e.style.background = "aqua";
            playerPicker.playerBoard.populateBoard(e.textContent, shipsArray[n]);
            nextPiece(playerPicker, e.textContent, shipsArray[n].size);
        })
    })

}

//Based on the first space selected, give options as to what is available next
function nextPiece(playerPicker, coordinates, size) {
    let filteredBoard = playerPicker.playerBoard.board.filter(c => 
        (c[0] == coordinates[0] && Math.abs(c[1] - coordinates[1]) < size) || 
        (c[1] == coordinates[1] && Math.abs(c.charCodeAt(0) - coordinates.charCodeAt(0)) < size));
}