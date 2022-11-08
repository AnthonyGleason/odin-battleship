class Ship {
  constructor(length, coords) {
    this.length = length;
    this.hitCounter = 0;
    this.coords = coords;
  }

  hit() {
    this.hitCounter += 1;
  }

  isSunk() {
    if (this.length === this.hitCounter) {
      return true;
    }
    return false;
  }
}

export default Ship;
