export default function gridGenerate() {
  const board = document.getElementById('board');
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const square = document.createElement('div');
      const circle = document.createElement('div');
      square.id = `${i}x${j}`;
      square.classList.add('square');
      if ((i + j) % 2 === 0) {
        square.classList.add('cream');
      } else {
        square.classList.add('tan');
      }
      board.append(square);


      if (((i + j) % 2 === 1) && (i < 3)) {
        circle.classList.add('red');
      };

      if (((i + j) % 2 === 1) && (i > 4)) {
        circle.classList.add('black');
      };

      square.append(circle);
    }
  }
}
