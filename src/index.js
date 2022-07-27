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
};

//Once initialized, have the player and AI set their pieces on the board
function setPieces(playerPicker) {
    let boardSquare = document.querySelectorAll("boardSquare");

    let shipsArray = [
        playerPicker.playerBoard.carrier, 
        playerPicker.playerBoard.battleship, 
        playerPicker.playerBoard.cruiser, 
        playerPicker.playerBoard.submarine,
        playerPicker.playerBoard.destroyer
    ]

    

}

