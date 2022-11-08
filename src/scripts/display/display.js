class Display {
  constructor(player, isPlayer) {
    this.player = player;
    this.isPlayer = isPlayer;
    this.boardElement = this.getBoard();

    // initalizes the grid on both sides
    this.displayGrid();
  }

  getBoard() {
    if (this.isPlayer === true) {
      return document.querySelector('#player-board');
    }
    return document.querySelector('#cpu-board');
  }

  displayGrid() {
    // clear grid
    this.boardElement.innerHTML = '';
    // store the board array in a variable
    const board = this.player.Gameboard.boardArray;
    // create 10 rows
    for (let i = 0; i < 10; i += 1) {
      // create a row
      const row = document.createElement('div');
      /* the index is set to 9 - i. 9 being the max grid size
      so essentially it will appear to display the rows in reverse
      on screen */
      row.setAttribute('index', 9 - i);
      // add row to row class
      row.setAttribute('class', 'row');
      // create 10 spaces per row
      for (let j = 0; j < 10; j += 1) {
        // create a space
        const space = document.createElement('div');
        space.setAttribute('index', j);
        // add space to space class
        space.setAttribute('class', 'space');
        /* if space is 'S' add space to ship class
        doesn't display enemy ships to player */
        if (board[i][j] === 'S' && this.isPlayer === true) {
          space.classList.add('ship');
        }
        // if space is 'M' add space to miss class
        if (board[i][j] === 'M') {
          space.classList.add('miss');
        }
        // if space is 'H' add space to hit class
        if (board[i][j] === 'H') {
          space.classList.add('hit');
        }
        // add space to row
        row.appendChild(space);
      }
      // append row to player board;
      this.boardElement.appendChild(row);
    }
  }
}

export default Display;
