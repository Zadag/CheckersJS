const Gameboard = ((markerFactory) => {
  const board = [];

  const initialize = () => {
    for (let i = 0; i < 8; i++) {
      const row = [];

      for (let j = 0; j < 8; j++) {
        let square = null;

        if (((i + j) % 2 === 1) && (i < 3)) {
          square = markerFactory(true);
        }

        if (((i + j) % 2 === 1) && (i > 4)) {
          square = markerFactory();
        }

        row.push(square);
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

  const updateSquare = (index, marker) => {
    // checks board at given index, updates to given marker,
    //  if marker empty set square to empty ;
    const [x, y] = index;

    if (board[x][y] !== null && marker) {
      console.log('square occupied');
      return;
    }

    // const htmlfield = document.getElementById(`${x}x${y}`);

    if (board[x][y] == null && marker) {
      board[x][y] = marker;
      // htmlfield.childNodes[0] = marker;
      return;
    }

    if (!marker) {
      board[x][y] = null;
      // htmlfield.removeChild(htmlfield.childNodes[0]);
    }
  };

  const getMarkerLocations = (isRed) => {
    // Return an array with the xy index of each marker belonging to the given player
    const locations = [];

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] != null && board[i][j].isRed === isRed) {
          locations.push([i, j]);
        }
      }
    }

    return locations;
  };

  const reset = () => {
    // Reset board to initial state, ready for a new game
    board.splice(0, board.length);
    initialize();
  };

  return {
    board,
    getSquare,
    updateSquare,
    getMarkerLocations,
    reset,
  };
});

export default Gameboard;
