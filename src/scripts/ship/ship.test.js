import Ship from './ship';

// Declare testship as a global variable for testing
let TESTSHIP = new Ship(3);

// Restore testship to a default 3 length ship
beforeAll(() => {
  TESTSHIP = new Ship(3);
});

describe('Ship class', () => {
  it('#hit should increment hitCounter by one', () => {
    TESTSHIP.hitCounter = 1;
    TESTSHIP.hit();
    expect(TESTSHIP.hitCounter).toEqual(2);
  });

  it('#isSunk should return true when hitCounter == ship length', () => {
    TESTSHIP.hitCounter = 3;
    expect(TESTSHIP.isSunk()).toBeTruthy();
  });

  it('#isSunk should return false when hitCounter != ship length ', () => {
    TESTSHIP.hitCounter = 1;
    expect(TESTSHIP.isSunk()).toBeFalsy();
  });
});
