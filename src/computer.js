import _ from 'lodash';
import gameboard from './gameboard';

function computer(dimension) {
    return {
        playerBoard: gameboard(dimension),
        isTurn: false,
        isWinner: false,
        attackEnemy(enemy) {
            if (this.isTurn) {
                //For now, randomize the coordinates
                let coordinates = randomCoordinates(enemy.playerBoard.board);

                //Split the received coordinates into array, if length 2, then its a hit
                let splitIndex = coordinates.split(' ');
                this.isTurn = false;
                enemy.isTurn = true;
                if (splitIndex.length == 2) {
                    enemy.playerBoard.receiveAttack(splitIndex[0], splitIndex[1]);
                    return "Likely Hit"
                } else {
                    enemy.playerBoard.receiveAttack(coordinates, "empty");
                    return "Likely Miss"
                }
            }
        },
        checkWin(enemy) {
            if (enemy.playerBoard.checkLoss() == "All ships destroyed. Game Over, you lost.") {
                this.isWinner = true;
                return "Congrats! You won the battle!"
            }
        }
    }
}
export default computer


function randomCoordinates(board) {
    let filteredBoard = board.filter(c => c != "missed"); 
    return filteredBoard[_.random(filteredBoard.length - 1)];
}
