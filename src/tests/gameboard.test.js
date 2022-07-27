import gameboard from "../gameboard";

describe('gameboard object, its properties, its functions', () => {
    const testBoard = gameboard(10);

    it('correctly sets the board to the array created from the helper function', () => {
        expect(testBoard.board.length).toStrictEqual(100);
        expect(testBoard.board[0]).toStrictEqual("A0");
        expect(testBoard.board[99]).toStrictEqual("J9");
    })

    it('correctly creates ship objects', () => {
        expect(testBoard.carrier).toMatchObject({title: "carrier", hitLocation: [], size: 5, sunk: false})
    })

    it('correctly populates the board', () => {
        testBoard.populateBoard("A1", testBoard.carrier);
        testBoard.populateBoard("A2", testBoard.carrier);
        testBoard.populateBoard("A3", testBoard.carrier);
        testBoard.populateBoard("A4", testBoard.carrier);
        testBoard.populateBoard("A5", testBoard.carrier);
        expect(testBoard.carrier).toMatchObject({title: "carrier", hitLocation: ["A1", "A2", "A3", "A4", "A5"], size: 5, sunk: false});
        expect(testBoard.board[1]).toStrictEqual("A1 carrier");
        expect(testBoard.board[2]).toStrictEqual("A2 carrier");
        expect(testBoard.board[3]).toStrictEqual("A3 carrier");
        expect(testBoard.board[4]).toStrictEqual("A4 carrier");
        expect(testBoard.board[5]).toStrictEqual("A5 carrier");
    })

    it('correctly receives an attack and records it as hit or missed', () => {
        testBoard.receiveAttack("A1", testBoard.carrier);
        testBoard.receiveAttack("B1", testBoard.carrier);
        expect(testBoard.board.indexOf("B1 carrier")).toStrictEqual(-1);

        //A1 calls the hit function in testBoard.receiveAttack
        expect(testBoard.carrier.hitLocation).toEqual(["Blast", "A2", "A3", "A4", "A5"]);

        //Since A1 hits, it marks it on the board
        expect(testBoard.board[1]).toStrictEqual("Blast");

        //Since B1 misses, it calls the missed function in testBoard.receiveAttack
        expect(testBoard.board[11]).toStrictEqual("missed");
    })

    it('correctly records a loss if all targets are sunk', () => {
        testBoard.carrier.hitLocation = ["Blast", "Blast", "Blast", "Blast", "Blast"];
        testBoard.battleship.hitLocation = ["Blast", "Blast", "Blast", "Blast"];
        testBoard.cruiser.hitLocation = ["Blast", "Blast", "Blast"];
        testBoard.submarine.hitLocation = ["Blast", "Blast", "Blast"];
        testBoard.destroyer.hitLocation = ["Blast", "Blast"];

        expect(testBoard.checkLoss()).toStrictEqual("All ships destroyed. Game Over, you lost.")
    })
})