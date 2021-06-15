const gameboard = (() => {
  const board = [];

  for (let i = 0; i < 12; i++) {
    const row = [];
    for (let j = 0; j < 12; j++) {
      const field = '';
      row.push(field);
    }
    board.push(row);
  }

  const getField = (index) => board[index];

  const updateField = (index, marker) => {
    // checks board at given index, updates to given marker,
    //  if marker empty set field to empty ;
  };

  const reset = () => {
    // Reset board to initial state, ready for a new game
  };

  return {
    getField,
    updateField,
    reset,
  };
});

export default gameboard;
