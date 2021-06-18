const markerFactory = (isRed = false) => {
  let isKing = false;

  return {
    isRed,
    isKing,
  };
};

export default markerFactory;
