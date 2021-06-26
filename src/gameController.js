const gameController = ((playerFactory, gameboard, DOM) => {
  const playerRed = playerFactory(true);
  const playerBlack = playerFactory(false);
  let redPlayersTurn;

  function getPlayer(redPlayer) {
    return redPlayer ? playerRed : playerBlack;
  }

  const takeTurn = () => {
    redPlayersTurn = !redPlayersTurn;

    gameboard.forEach((square) => {
      // Check if square has marker
      if (square != null && square.isRed === redPlayersTurn) {
        console.log(square);
      }
    });
  };
});
