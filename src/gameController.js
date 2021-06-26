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
  };
});

export default gameController;
