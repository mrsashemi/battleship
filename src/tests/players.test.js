import player from '../players';
import computer from '../computer';
import 'jest-matcher-one-of';


describe('player and computer objects and their properties ', () => {
    const testPlayer = player(10);
    const testAi = computer(10);

    
    it('attacks and switches turns between player and computer', () => {
        //Set to players turn
        testPlayer.isTurn = true;
        expect(testPlayer.isTurn).toStrictEqual(true);
        
        //populate the computer's board
        testAi.playerBoard.populateBoard("A1", testAi.playerBoard.carrier);
        testAi.playerBoard.populateBoard("A2", testAi.playerBoard.carrier);
        testAi.playerBoard.populateBoard("A3", testAi.playerBoard.carrier);
        testAi.playerBoard.populateBoard("A4", testAi.playerBoard.carrier);
        testAi.playerBoard.populateBoard("A5", testAi.playerBoard.carrier);
        expect(testAi.playerBoard.board[1]).toStrictEqual("A1 carrier");
        expect(testAi.playerBoard.board.indexOf("A1 carrier")).toStrictEqual(1);

        //populate the players's board
        testPlayer.playerBoard.populateBoard("A1", testPlayer.playerBoard.carrier);
        testPlayer.playerBoard.populateBoard("A2", testPlayer.playerBoard.carrier);
        testPlayer.playerBoard.populateBoard("A3", testPlayer.playerBoard.carrier);
        testPlayer.playerBoard.populateBoard("A4", testPlayer.playerBoard.carrier);
        testPlayer.playerBoard.populateBoard("A5", testPlayer.playerBoard.carrier);
        expect(testPlayer.playerBoard.board[1]).toStrictEqual("A1 carrier");
        expect(testPlayer.playerBoard.board.indexOf("A1 carrier")).toStrictEqual(1);

        //testPlayer calls hits onto the computer and switches turn to computer
        expect(testPlayer.attackEnemy(testAi, "A1", testAi.playerBoard.carrier)).toStrictEqual("Attack Sent")
        expect(testAi.playerBoard.carrier.hitLocation).toEqual(["Blast", "A2", "A3", "A4", "A5"]);
        expect(testPlayer.attackEnemy(testAi, "A1", testAi.playerBoard.carrier)).toStrictEqual("Not your turn!")

        //Since the A1 call from the player hits, it marks it on the computers board
        expect(testAi.playerBoard.board[1]).toStrictEqual("Blast");

        //Now test the computers attack to see if it lands. Since the coordinates are random, simulate Logical OR in jest with jest-matcher-one-of by d4nyll on github.
        expect(testAi.attackEnemy(testPlayer)).toBeOneOf(["Likely Miss", "Likely Hit"]);

        //Check once more to see if the player can move now to ensure turn swaps properly, it also sends a missed attack this time.
        expect(testAi.isTurn).toBeFalsy();
        expect(testPlayer.isTurn).toBeTruthy();
        expect(testPlayer.attackEnemy(testAi, "B1", testAi.playerBoard.carrier)).toStrictEqual("Attack Sent")
        expect(testAi.playerBoard.board[11]).toStrictEqual("missed");
    })

    it('correctly records a win if all enemy targets are sunk', () => {
        testPlayer.playerBoard.carrier.hitLocation = ["Blast", "Blast", "Blast", "Blast", "Blast"];
        testPlayer.playerBoard.battleship.hitLocation = ["Blast", "Blast", "Blast", "Blast"];
        testPlayer.playerBoard.cruiser.hitLocation = ["Blast", "Blast", "Blast"];
        testPlayer.playerBoard.submarine.hitLocation = ["Blast", "Blast", "Blast"];
        testPlayer.playerBoard.destroyer.hitLocation = ["Blast", "Blast"];

        expect(testAi.checkWin(testPlayer)).toStrictEqual("Congrats! You won the battle!")
        expect(testAi.isWinner).toBeTruthy();
    })
})

