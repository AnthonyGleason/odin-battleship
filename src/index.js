import './styles/styles.css';
import Player from './scripts/player/player';

// eslint-disable-next-line func-names
const newGame = function () {
  // Create two players
  const PLAYER = new Player(true);
  const CPU = new Player(false);
  // Initalize their board arrays
  PLAYER.Gameboard.initBoard();
  CPU.Gameboard.initBoard();

  // Place five ships on the Player board
  // 1) 2x length ship
  PLAYER.Gameboard.placeShip([[1, 2], [1, 3]]);
  // 2) 3x length ship
  PLAYER.Gameboard.placeShip([[2, 3], [2, 4], [2, 5]]);
  // 3) 3x length ship
  PLAYER.Gameboard.placeShip([[3, 7], [3, 8], [3, 9]]);
  // 4) 4x length ship
  PLAYER.Gameboard.placeShip([[4, 1], [4, 2], [4, 3], [4, 4]]);
  // 5) 5x length ship
  PLAYER.Gameboard.placeShip([[5, 2], [5, 3], [5, 4], [5, 5], [5, 6]]);

  // Place five ships on the CPU board
  // 1) 2x length ship
  CPU.Gameboard.placeShip([[1, 2], [1, 3]]);
  // 2) 3x length ship
  CPU.Gameboard.placeShip([[8, 5], [8, 6], [8, 7]]);
  // 3) 3x length ship
  CPU.Gameboard.placeShip([[6, 4], [6, 5], [6, 6]]);
  // 4) 4x length ship
  CPU.Gameboard.placeShip([[9, 1], [9, 2], [9, 3], [9, 4], [9, 5]]);
  // 5) 5x length ship
  CPU.Gameboard.placeShip([[2, 1], [2, 2], [2, 3], [2, 4], [2, 5]]);

  // Display the player boardArray

  // Display the cpu boardArray
};

// Initalize a new game (when the site is loaded this runs by default)
newGame();
