const gameController = ((playerFactory, gameboard, display) => {
  const playerRed = playerFactory(true);
  const playerBlack = playerFactory(false);
  let redPlayersTurn = false;

  function getPlayer(redPlayer) {
    return redPlayer ? playerRed : playerBlack;
  }

  const getAvailableMoves = (index) => {
    // return an array containing an index for each possible move.
    // if no moves are available return null
    const [x, y] = index;
    const { isRed, isKing } = gameboard.getSquare(index);
    const direction = isRed ? 1 : -1;
    const moves = [
      { x: x + direction, y: y + 1 },
      { x: x + direction, y: y - 1 },
      { x: x - direction, y: y + 1 },
      { x: x - direction, y: y - 1 },
    ];

    const availableMoves = [];

    for (let i = 0; i < moves.length; i++) {
      if (i > 1 && !isKing) continue;
      if (moves[i].x < 0 || moves[i].x > 7) continue;
      if (moves[i].y < 0 || moves[i].y > 7) continue;
      if (gameboard.getSquare([moves[i].x, moves[i].y]) != null) continue;

      availableMoves.push([moves[i].x, moves[i].y]);
    }

    return availableMoves.length > 0 ? availableMoves : null;
  };

  const takeTurn = () => {
    // Set player
    redPlayersTurn = !redPlayersTurn;
    console.log(`Begin ${redPlayersTurn ? 'Red' : 'Black'} player's turn`);

    // get the location of current player's markers
    const markerLocations = gameboard.getMarkerLocations(redPlayersTurn);

    // Check current player's markers for available moves
    markerLocations.forEach((index) => {
      const availableMoves = getAvailableMoves(index);
      if (availableMoves != null) {
        console.log(index, 'can make a move');
      }
    });

    // TBD...
  };

  takeTurn(); // should live in a loop which runs until gameover...
});

export default gameController;
