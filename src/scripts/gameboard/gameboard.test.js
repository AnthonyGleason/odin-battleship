import Gameboard from './gameboard';

let TESTBOARD = new Gameboard();

beforeEach(() => {
  TESTBOARD = new Gameboard();
  // initalize the gameBoard array
  TESTBOARD.initBoard();
});

describe('Gameboard class', () => {
  describe('#initBoard', () => {
    it('should create 10 rows in boardArray', () => {
      // test boardArray.length
      expect(TESTBOARD.boardArray.length).toEqual(10);
    });

    it('should create a 10 width column for each row', () => {
      // test two random rows for 10 width columns
      expect(TESTBOARD.boardArray[3].length).toEqual(10);
      expect(TESTBOARD.boardArray[7].length).toEqual(10);
    });
  });
  describe('#genShipCoords', () => {
    it('should generate the same number of coordinates as inputted length', () => {
      expect(TESTBOARD.genShipCoords(4).length).toBe(4);
    });
  });
  describe('#placeShip', () => {
    it('should place a ship at coordinates specified', () => {
      // coordinates to be tested
      const coords = [[1, 2], [1, 3], [1, 4]];
      TESTBOARD.placeShip(coords);
      // test each coord to see if it exists on the board
      coords.forEach((coord) => {
        expect(TESTBOARD.boardArray[coord[0]][coord[1]]).toBe('S');
      });
    });

    it('works with a different ship size', () => {
      // coordinates to be tested
      const coords = [[1, 2], [1, 3], [1, 4], [1, 5]];
      TESTBOARD.placeShip(coords);
      // test each coord to see if it exists on the board
      coords.forEach((coord) => {
        expect(TESTBOARD.boardArray[coord[0]][coord[1]]).toBe('S');
      });
    });

    it('should add the ship to the shipArray', () => {
      // coordinates to be tested
      const coords = [[1, 2], [1, 3], [1, 4]];
      TESTBOARD.placeShip(coords);
      // check the ship array to see if the ship was added
      expect(TESTBOARD.shipArray[0]).not.toBeUndefined();
    });
  });

  describe('#recieveAttack', () => {
    it('should mark a hit on the boardArray', () => {
      // create an attack with a valid ship coordinate
      const attack = [1, 4];
      // place ship at these coords
      const coords = [[1, 2], [1, 3], [1, 4]];
      TESTBOARD.placeShip(coords);
      TESTBOARD.recieveAttack(attack);
      // check the board array to see if the hit was marked
      expect(TESTBOARD.boardArray[attack[0]][attack[1]]).toEqual('H');
    });

    it('should mark a missed hit on the boardArray', () => {
      // create an attack with a ship coordinate which should miss
      const attack = [2, 3];
      // place ship at these coords
      const coords = [[1, 2], [1, 3], [1, 4]];
      TESTBOARD.placeShip(coords);
      TESTBOARD.recieveAttack(attack);
      // check the board array to see if the miss was marked
      expect(TESTBOARD.boardArray[attack[0]][attack[1]]).toEqual('M');
    });

    it('should increment the correct ships hitCounter on hit', () => {
      // create an attack with a valid ship coordinate
      const attack = [2, 4];
      // place ship at these coords
      let coords = [[1, 2], [1, 3], [1, 4]];
      TESTBOARD.placeShip(coords);
      // create a second ship at these coords
      coords = [[2, 2], [2, 3], [2, 4]];
      TESTBOARD.placeShip(coords);
      TESTBOARD.recieveAttack(attack);
      // check the board array to see if the hitCounter was incremented on the correct ship
      expect(TESTBOARD.shipArray[1].hitCounter).toBe(1);
    });

    it('should keep track of a missed attack in missedCords', () => {
      // create an attack with a ship coordinate which should miss
      const attack = [2, 3];
      // place ship at these coords
      const coords = [[1, 2], [1, 3], [1, 4]];
      TESTBOARD.placeShip(coords);
      TESTBOARD.recieveAttack(attack);
      expect(TESTBOARD.boardArray[attack[0]][attack[1]]).toEqual('M');
    });
  });

  describe('#isAllSunk', () => {
    it('should return true if all ships are sunk', () => {
      // create and place 5 ships
      for (let i = 2; i < 7; i += 1) {
        // create coords
        const coords = [[i, 1], [i, 2], [i, 3]];
        // place ship
        TESTBOARD.placeShip(coords);
      }
      // set all hit counters to 3
      TESTBOARD.shipArray.forEach((ship) => {
        // eslint-disable-next-line no-param-reassign
        ship.hitCounter = 3;
      });
      expect(TESTBOARD.isAllSunk()).toBeTruthy();
    });

    it('should return false if there are ships that are not sunk', () => {
      // create and place 5 ships
      for (let i = 2; i < 7; i += 1) {
        // create coords
        const coords = [[i, 1], [i, 2], [i, 3]];
        // place ship
        TESTBOARD.placeShip(coords);
      }
      expect(TESTBOARD.isAllSunk()).toBeFalsy();
    });
  });

  describe('#findShip', () => {
    it('should return a ship at the coordinates provided', () => {
      // place ship at these coords
      const coords = [[1, 2], [1, 3], [1, 4]];
      TESTBOARD.placeShip(coords);
      // find the ship at the specified coordinates
      const ship = TESTBOARD.findShip([1, 3]);
      // test first coordinate
      expect(ship.coords[0][0]).toBe(coords[0][0]);
      expect(ship.coords[0][1]).toBe(coords[0][1]);
      // test second coordinate
      expect(ship.coords[1][0]).toBe(coords[1][0]);
      expect(ship.coords[1][1]).toBe(coords[1][1]);
      // test third coordinate
      expect(ship.coords[2][0]).toBe(coords[2][0]);
      expect(ship.coords[2][1]).toBe(coords[2][1]);
    });

    it('should return false if there is not a ship at the coordinates provided', () => {
      // place ship at these coords
      const coords = [[1, 2], [1, 3], [1, 4]];
      TESTBOARD.placeShip(coords);
      expect(TESTBOARD.findShip([2, 2])).toBeFalsy();
    });
  });
});
