//import battleship.js for testing
const battleship = require("./battleship.js");

describe("Gameboard methods",()=>{
    beforeEach(()=>{
        GAMEBOARD = new battleship.Gameboard();
    });
    test("#placeShip, width 2 spaces",()=>{
        let ship=GAMEBOARD.placeShip(2,[[2,2],[2,3]]);
        expect(ship.coords).toEqual([[2,2],[2,3]]);
    });
    test("#placeShip, width 3 spaces",()=>{
        let ship=GAMEBOARD.placeShip(3,[[1,2],[1,3],[1,4]]);
        expect(ship.coords).toEqual([[1,2],[1,3],[1,4]]);
    });
    test("#placeShip, width 4 spaces",()=>{
        let ship=GAMEBOARD.placeShip(4,[[4,2],[4,3],[4,4],[4,5]]);
        expect(ship.coords).toEqual([[4,2],[4,3],[4,4],[4,5]]);
    });
    test("#placeShip, width 5 spaces",()=>{
        let ship=GAMEBOARD.placeShip(5,[[5,2],[5,3],[5,4],[5,5],[5,6]]);
        expect(ship.coords).toEqual([[5,2],[5,3],[5,4],[5,5],[5,6]]);
    });
    test("#placeShip, fails space is taken by another ship", ()=>{
        let shipA=GAMEBOARD.placeShip(2,[[2,2],[2,3]]);
        let shipB=GAMEBOARD.placeShip(2,[[3,3],[2,3]]);
        expect(shipB).toBeNull();
    });
    test("#placeShip, fails when coords are out of bounds",()=>{
        let ship=GAMEBOARD.placeShip(3,[[-1,2],[10,3],[1,4]]);
        expect(ship).toBeNull();
    });
    test("#placeShip, fails when coords are not in a straight line",()=>{
        let ship=GAMEBOARD.placeShip(3,[[1,2],[8,3],[5,4]]);
        expect(ship).toBeNull();
    });
    test("#placeShip, fails when length != the number of coords",()=>{
        let ship=GAMEBOARD.placeShip(2,[[1,2],[8,3],[5,4]]);
        expect(ship).toBeNull();
    });
});