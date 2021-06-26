const gameController = ((playerFactory, gameboard, display) => {
  const playerRed = playerFactory(true);
  const playerBlack = playerFactory(false);
  let redPlayersTurn;

  function getPlayer(redPlayer) {
    return redPlayer ? playerRed : playerBlack;
  }

  const takeTurn = () => {
    // Set player
    redPlayersTurn = !redPlayersTurn;

    // Check active player's markers for available moves

    gameboard.forEach((square) => {
      // Check if square has marker
      if (square != null && square.isRed === redPlayersTurn) {
        console.log(square);
      }
    });
  };
});

export default gameController;
