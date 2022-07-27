import shipFactory from "../ships";

describe('Assess Object properties and functions', () => {
    const carrier = shipFactory("carrier", ["A1", "B1", "C1", "D1", "E1"], 5, false);
    const destroyer = shipFactory("destroyer", ["H7", "H8"], 2, false);

    it('applies Blast to the correct coordinates in the hitLocation array', () => {
        expect(carrier.hit("A1")).toStrictEqual(["Blast","B1", "C1", "D1", "E1"]);
        expect(carrier.hit("B1")).toStrictEqual(["Blast","Blast", "C1", "D1", "E1"]);
        expect(carrier.hit("C1")).toStrictEqual(["Blast","Blast", "Blast", "D1", "E1"]);
        expect(carrier.hit("D1")).toStrictEqual(["Blast","Blast", "Blast", "Blast", "E1"]);
        expect(carrier.hit("E1")).toStrictEqual(["Blast","Blast", "Blast", "Blast", "Blast"]);
        expect(destroyer.hit("H7")).toStrictEqual(["Blast", "H8"]);
        expect(destroyer.hit("A8")).toStrictEqual(undefined);
    })

    it('changes the original array in the ships object when hit', () => {
        expect(carrier.hitLocation).toStrictEqual(["Blast","Blast", "Blast", "Blast", "Blast"]);
        expect(destroyer.hitLocation).toStrictEqual(["Blast", "H8"]);
    })

    it('sinks the carrier when each item in the hitLocation array is Blast', () => {
        expect(carrier.isSunk()).toStrictEqual(true);
        expect(destroyer.isSunk()).toStrictEqual(false);
    })
})