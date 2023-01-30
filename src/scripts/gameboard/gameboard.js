import Ship from '../ship/ship';

class Gameboard {
  constructor() {
    this.boardArray = [];
    this.shipArray = [];
    this.missedCoords = [];
  }

  genShipCoords(shipLength) {
    let shipCoords = [];
    while (shipCoords.length < shipLength) {
      // generate a random number between 0-9 for an x coord
      const x = Math.floor(Math.random() * 10);
      // generate a random number between 0-9 for an y coord
      const y = Math.floor(Math.random() * 10);

      // test cases to reject coords
      const vertical = Math.floor(Math.random() * 2);
      // generate coordinates
      if (vertical === 0 && x + shipLength < 10 && x + shipLength > -1) {
        // add the spaces to shipCoords array
        for (let i = 0; i < shipLength; i += 1) {
          shipCoords.push([x + i, y]);
        }

      /* if vertical == 1 test y axis for +shipLength || -shiplength
      within bounds this tests the coordinates to be within bounds */
      } else if (vertical === 1 && y + shipLength < 10 && y + shipLength > -1) {
        // add the spaces to the shipCoords array
        for (let i = 0; i < shipLength; i += 1) {
          shipCoords.push([x, y + i]);
        }
      }
      // if any space has a ship reset shipCoords to an empty array
      let removeShip = false;
      shipCoords.forEach((coord) => {
        if (this.boardArray[coord[0]][coord[1]] === 'S') {
          removeShip = true;
        }
      });
      if (removeShip === true) {
        shipCoords = [];
      }
    }
    return shipCoords;
  }

  initBoard() {
    // clear the boardArray
    this.boardArray = [];

    for (let i = 0; i < 10; i += 1) {
      // create a row
      const row = [];
      // create a 10 width column for the row
      for (let j = 0; j < 10; j += 1) {
        row.push([]);
      }
      // push row to the boardArray
      this.boardArray.push(row);
    }
  }

  findShip(coords) {
    /* This algorithm is not the most efficient way to solve this problem.
    An alternative solution would be to store the ship object on the board space
    directly as a property of a "Space object". We would be able to retrieve
    a reference to the ship object at that coordinate without sorting through every
    array item, another alternative is of course recursion */

    // create a ship found bool which will be returned if a ship is not found
    const shipFound = false;
    // loop across each item in the ship array
    for (let i = 0; i < this.shipArray.length; i += 1) {
      // loop across every item in the current ship's coord array
      for (let j = 0; j < this.shipArray[i].coords.length; j += 1) {
        // base case a ship is found with the coords specified
        if (this.shipArray[i].coords[j][0] === coords[0]
          && this.shipArray[i].coords[j][1] === coords[1]) {
          // return the ship
          return this.shipArray[i];
        }
      }
    }

    // returns if a ship with the specified coordinates is not found
    return shipFound;
  }

  placeShip(coords) {
    // create a new ship
    const tempShip = new Ship(coords.length, coords);
    // add the ship to the shipArray
    this.shipArray.push(tempShip);
    // add ship markers to the board array
    coords.forEach((coord) => {
      this.boardArray[coord[0]][coord[1]] = 'S';
    });
  }

  recieveAttack(attack) {
    // Check to see if there is a ship at that location
    if (this.boardArray[attack[0]][attack[1]] === 'S') {
      // Record the hit on the board array
      this.boardArray[attack[0]][attack[1]] = 'H';
      // Call the findShip function to find the ship that was attacked
      const ship = this.findShip(attack);
      // Increment the ship that was attacked hitCounter by one
      ship.hitCounter += 1;
    } else {
      // Record the missed hit on the board array
      this.boardArray[attack[0]][attack[1]] = 'M';
      // Record the missed hit in missedCords
      this.missedCoords.push(attack);
    }
  }

  isAllSunk() {
    return this.shipArray.every((ship) => ship.isSunk());
  }
}

export default Gameboard;
