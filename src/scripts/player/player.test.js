import Player from './player';

let TESTPLAYER = new Player(true);
let TESTCPU = new Player(false);

beforeEach(() => {
  // restore player
  TESTPLAYER = new Player(true);
  // init player gameboard
  TESTPLAYER.Gameboard.initBoard();
  // restore cpu
  TESTCPU = new Player(false);
  // init cpu gameboard
  TESTCPU.Gameboard.initBoard();
});

describe('Player class', () => {
  describe('#cpuGenAttack', () => {
    it('should generate a coordinate', () => {
      expect(TESTCPU.cpuGenAttack(TESTPLAYER.Gameboard).length).toBe(2);
    });
  });

  describe('#playerTurn', () => {
    it('should attack the cpu gameboard at specific coordinates', () => {
      const attack = [3, 2];
      TESTPLAYER.playerTurn(TESTCPU.Gameboard, attack);
      expect(TESTCPU.Gameboard.boardArray[attack[0]][attack[1]]).toBe('M');
    });
  });
});
