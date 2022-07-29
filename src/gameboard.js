import shipFactory from "./ships";

function gameboard(dimension) {
    return {
        board: createBoardArray(dimension * dimension),
        dimensions: dimension,
        size: dimension * dimension,
        "carrier": shipFactory("carrier", [], 5, false),
        "battleship": shipFactory("battleship", [], 4, false),
        "cruiser": shipFactory("cruiser", [], 3, false),
        "submarine": shipFactory("submarine", [], 3, false),
        "destroyer": shipFactory("destroyer", [], 2, false),
        populateBoard(coordinates, ship) {
            let index = this.board.indexOf(coordinates);
            this.board[index] = `${coordinates} ${ship.title}`;
            ship.hitLocation.push(coordinates);
        },
        receiveAttack(coordinates, ship) {
            let index;
            if (ship == "empty") {
                index = this.board.indexOf(coordinates + ' ' + "empty");
            } else {
                index = this.board.indexOf(coordinates + ' ' + ship.title);
            }
            return (index !== -1) ? this.hit(coordinates, ship) : this.missed(coordinates);
        },
        hit(coordinates, ship) {
            let index = ship.hitLocation.indexOf(coordinates);
             if (index != -1) {
                let i = this.board.indexOf(coordinates + ' ' + ship.title);
                this.board[i] = "Blast";
                ship.hitLocation[index] = "Blast";
             } else {
                this.missed(coordinates);
             }
        },
        missed(coordinates) {
            let index = this.board.indexOf(coordinates);
            return (index != -1) ? this.board[index] = "missed" : "already hit";
        },
        checkLoss() {
            let shipArr = [this.carrier, this.battleship, this.cruiser, this.submarine, this.destroyer];
            let counter = 0;

            for (let i = 0; i < shipArr.length; i++) {
                (shipArr[i].isSunk() == true) ? counter++ : counter--;
            }

            return (counter == 5) ? "All ships destroyed. Game Over, you lost." : counter;
        }
    }
}
export default gameboard

function createBoardArray(boardSize) {
    let arr = [];
    let counter = 0;
    let letter = "A";

    for (let i = 0; i < boardSize; i++) {
        arr.push(letter + counter);

        if (counter == (Math.sqrt(boardSize) - 1) ) {
            counter = 0;
            letter = String.fromCharCode(letter.charCodeAt(0) + 1);
        } else {
            counter++;
        } 
    }

    return arr;
}


