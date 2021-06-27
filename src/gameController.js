const gameController = ((playerFactory, gameboard, display) => {
  const playerRed = playerFactory(true);
  const playerBlack = playerFactory(false);
  let redPlayersTurn = true;

  function getPlayer(redPlayer) {
    return redPlayer ? playerRed : playerBlack;
  }

  const getAvailableMoves = (index) => {
    // return an array containing an index for each possible move.
    // if no moves are available return null
    const [x, y] = index;
    const { isRed, isKing } = gameboard.getSquare(index);

    const direction = isRed ? 1 : -1;

    if (x + direction <= 7 && x + direction >= 0) {
      gameboard.getSquare([x + direction, y])
    }
  };

  const takeTurn = () => {
    // Set player
    redPlayersTurn = !redPlayersTurn;
    console.log(`Begin ${redPlayersTurn ? 'Red' : 'Black'} player's turn`);

    // get the location of current player's markers
    const markerLocations = gameboard.getMarkerLocations(redPlayersTurn);

    // Check current player's markers for available moves
    markerLocations.forEach((index) => {
      getAvailableMoves(index);
    });

    // TBD
  };

  takeTurn();
});

export default gameController;
