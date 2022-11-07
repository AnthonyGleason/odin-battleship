class Ship {
  constructor(length) {
    this.length = length;
    this.hitCounter = 0;
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
