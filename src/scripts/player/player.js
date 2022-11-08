import Gameboard from '../gameboard/gameboard';

class Player {
  constructor(isPlayer) {
    this.isPlayer = isPlayer;
    this.Gameboard = new Gameboard();
  }

  cpuGenAttack(PlayerBoard) {
    let validMove = false;
    let x;
    let y;
    while (validMove === false) {
      // generate a random number between 0-9 for an x coord
      x = Math.floor(Math.random() * 10);
      // generate a random number between 0-9 for an y coord
      y = Math.floor(Math.random() * 10);
      // check the boardArray for 'M' or 'H' which tells us if the space has been attacked already
      if (PlayerBoard.boardArray[x][y] !== 'M' && PlayerBoard.boardArray[x][y] !== 'H') {
        // if the space hasn't been attacked change validMove to true
        validMove = true;
      }
    }
    return [x, y];
  }

  cpuTurn(PlayerBoard) {
    // generate an attack
    const attack = this.cpuGenAttack(PlayerBoard);
    // attack enemy gameboard
    PlayerBoard.recieveAttack(attack);
  }

  playerTurn(CpuBoard, attack) {
    // attack the enemy gameboard
    CpuBoard.recieveAttack(attack);
  }
}

export default Player;
