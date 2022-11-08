import Ship from './ship';

// Declare testship as a global variable for testing
let TESTSHIP = new Ship(3);

// Restore testship to a default 3 length ship
beforeAll(() => {
  TESTSHIP = new Ship(3);
});

describe('Ship class', () => {
  describe('#hit', () => {
    it('should increment hitCounter by one', () => {
      TESTSHIP.hitCounter = 1;
      TESTSHIP.hit();
      expect(TESTSHIP.hitCounter).toEqual(2);
    });
  });
  describe('#isSunk', () => {
    it('should return true when hitCounter == ship length', () => {
      TESTSHIP.hitCounter = 3;
      expect(TESTSHIP.isSunk()).toBeTruthy();
    });

    it('should return false when hitCounter != ship length ', () => {
      TESTSHIP.hitCounter = 1;
      expect(TESTSHIP.isSunk()).toBeFalsy();
    });
  });
});
