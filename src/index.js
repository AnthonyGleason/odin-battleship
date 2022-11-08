import './styles/styles.css';
import Player from './scripts/player/player';
import Display from './scripts/display/display';

// eslint-disable-next-line func-names
const newGame = function (PLAYER, CPU, PLAYERDISPLAY, CPUDISPLAY) {
  // Create two players
  // eslint-disable-next-line no-param-reassign
  PLAYER = new Player(true);
  // eslint-disable-next-line no-param-reassign
  CPU = new Player(false);

  // Initalize their board arrays
  PLAYER.Gameboard.initBoard();
  CPU.Gameboard.initBoard();

  // Place five ships on the Player board
  // 1) 2x length ship
  PLAYER.Gameboard.placeShip(PLAYER.Gameboard.genShipCoords(2));
  // 2) 3x length ship
  PLAYER.Gameboard.placeShip(PLAYER.Gameboard.genShipCoords(3));
  // 3) 3x length ship
  PLAYER.Gameboard.placeShip(PLAYER.Gameboard.genShipCoords(3));
  // 4) 4x length ship
  PLAYER.Gameboard.placeShip(PLAYER.Gameboard.genShipCoords(4));
  // 5) 5x length ship
  PLAYER.Gameboard.placeShip(PLAYER.Gameboard.genShipCoords(5));

  // Place five ships on the CPU board
  // 1) 2x length ship
  CPU.Gameboard.placeShip(CPU.Gameboard.genShipCoords(2));
  // 2) 3x length ship
  CPU.Gameboard.placeShip(CPU.Gameboard.genShipCoords(3));
  // 3) 3x length ship
  CPU.Gameboard.placeShip(CPU.Gameboard.genShipCoords(3));
  // 4) 4x length ship
  CPU.Gameboard.placeShip(CPU.Gameboard.genShipCoords(4));
  // 5) 5x length ship
  CPU.Gameboard.placeShip(CPU.Gameboard.genShipCoords(5));

  // Initalize their displays
  // eslint-disable-next-line no-param-reassign
  PLAYERDISPLAY = new Display(PLAYER, true);
  // eslint-disable-next-line no-param-reassign
  CPUDISPLAY = new Display(CPU, false);

  // add center greeting
  document.querySelector('.content-alerts').textContent = 'Welcome to Battleship!';

  // add event listeners which allow turns to be played
  CPUDISPLAY.addSpaceListeners(PLAYERDISPLAY);
};

// Initalize a new game (when the site is loaded this runs by default)

// Create two players
const PLAYER = new Player(true);
const CPU = new Player(false);

// Create both displays
let PLAYERDISPLAY;
let CPUDISPLAY;

// Create new game button
const newGameButton = document.querySelector('.new-game');
newGameButton.addEventListener('click', () => {
  newGame(PLAYER, CPU, PLAYERDISPLAY, CPUDISPLAY);
});

newGame(PLAYER, CPU, PLAYERDISPLAY, CPUDISPLAY);
