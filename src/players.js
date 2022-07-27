import gameboard from './gameboard';

function player(dimension) {
    return {
        playerBoard: gameboard(dimension),
        isTurn: false,
        isWinner: false,
        attackEnemy(enemy, coordinates, ship) {
            if (this.isTurn == true) {
                enemy.playerBoard.receiveAttack(coordinates, ship);
                this.isTurn = false;
                enemy.isTurn = true;
                return "Attack Sent"
            } else {
                return "Not your turn!"
            }
        },
        checkWin(enemy) {
            if (enemy.playerBoard.checkLoss() == "All ships destroyed. Game Over, you lost.") {
                this.isWinner == true;
                return "Congrats! You won the battle!"
            }
        }
    }
}
export default player