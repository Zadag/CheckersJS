const Gameboard = ((red, black) => {
  const board = [];
  const squareInfo = { hasMarker: false };

  const initialize = () => {
    for (let i = 0; i < 8; i++) {
      const row = [];

      for (let j = 0; j < 8; j++) {
        const square = {};

        if (((i + j) % 2 === 1) && (i < 3)) {
          square.hasMarker = true;
          square.marker = red;
          row.push(square);
          continue;
        }

        if (((i + j) % 2 === 1) && (i > 4)) {
          square.hasMarker = true;
          square.marker = black;
          row.push(square);
          continue;

        } else {
          square.hasMarker = false;
          row.push(square);
        }
      }
      board.push(row);
    }

    console.log('Gameboard initialized');
  };

  initialize();

  const getSquare = (index) => {
    // returns selected square
    const [x, y] = index;
    return board[x][y];
  };

  const clearSquare = (index) => {
    const [x, y] = index;
    // const htmlField = document.getElementById(`${x}x${y}`);
    // htmlfield.removeChild(htmlfield.childNodes[0]);
    board[x][y] = squareInfo;
  };

  const updateSquare = (index, marker) => {
    // checks board at given index, updates to given marker,
    //  if marker empty set square to empty ;
    const [x, y] = index;

    if (board[x][y].hasMarker && marker) {
      console.log('square occupied');
      return;
    }

    // const htmlfield = document.getElementById(`${x}x${y}`);

    if (!board[x][y].hasMarker && marker) {
      board[x][y] = marker;
      // htmlfield.childNodes[0] = marker;
      return;
    }

    if (!marker) {
      board[x][y] = '';
      // htmlfield.removeChild(htmlfield.childNodes[0]);
    }
  };

  const reset = () => {
    // Reset board to initial state, ready for a new game
    board.splice(0, board.length);
    initialize();
  };

  return {
    board, // remove board from public variables after development
    getSquare,
    updateSquare,
    clearSquare,
    reset,
  };
});

export default Gameboard;
