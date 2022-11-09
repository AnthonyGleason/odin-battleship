import Gameboard from '../gameboard/gameboard';

class Player {
  constructor(isPlayer) {
    this.isPlayer = isPlayer;
    this.Gameboard = new Gameboard();
    this.lastCpuAttack = null;
  }

  // eslint-disable-next-line class-methods-use-this
  cpuGenAttack(PlayerBoard) {
    /* When debugging this remember that the board
    displayed IS REVERSED on screen! */
    if (this.lastCpuAttack!=null){
      let tempAttack;

      //try up one coordinate
      tempAttack = [this.lastCpuAttack[0],this.lastCpuAttack[1]+1];
      if (tempAttack[1]>-1 && tempAttack[1]<10
        && PlayerBoard.boardArray[tempAttack[0]][tempAttack[1]]!=='M'
        && PlayerBoard.boardArray[tempAttack[0]][tempAttack[1]]!=='H'){
        this.lastCpuAttack=null;
        return tempAttack;
      }
      //try down one coordinate
      tempAttack = [this.lastCpuAttack[0],this.lastCpuAttack[1]-1];
      if(tempAttack[1]>-1 && tempAttack[1]<10
        && PlayerBoard.boardArray[tempAttack[0]][tempAttack[1]]!=='M'
        && PlayerBoard.boardArray[tempAttack[0]][tempAttack[1]]!=='H'){
        this.lastCpuAttack=null;
        return tempAttack;
      }
      
      //try left one coordinate
      tempAttack = [this.lastCpuAttack[0]-1,this.lastCpuAttack[1]];
      if(tempAttack[0]>-1 && tempAttack[0]<10
        && PlayerBoard.boardArray[tempAttack[0]][tempAttack[1]]!=='M'
        && PlayerBoard.boardArray[tempAttack[0]][tempAttack[1]]!=='H'){
        this.lastCpuAttack=null;
        return tempAttack;
      }

      //try right one coordinate
      tempAttack = [this.lastCpuAttack[0]+1,this.lastCpuAttack[1]];
      if(tempAttack[0]>-1 && tempAttack[0]<10
        && PlayerBoard.boardArray[tempAttack[0]][tempAttack[1]]!=='M'
        && PlayerBoard.boardArray[tempAttack[0]][tempAttack[1]]!=='H'){
        this.lastCpuAttack=null;
        return tempAttack;
      }
    };
    
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
    //check to see if the last attack was a hit
    if (PlayerBoard.boardArray[attack[0]][attack[1]]=='H') this.lastCpuAttack = attack;
  }

  // eslint-disable-next-line class-methods-use-this
  playerTurn(CpuBoard, attack) {
    // attack the enemy gameboard
    CpuBoard.recieveAttack(attack);
  }
}

export default Player;
