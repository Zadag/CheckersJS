console.log("test");

function gridGenerate() {
  const board = document.getElementById("board");
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const square = document.createElement("div");
      square.id = `${i}x${j}`;
      square.classList.add("square");
      if ((i + j) % 2 === 0) {
        square.classList.add("red");
      } else {
        square.classList.add("black");
      }
      board.append(square);
    }
  }
}

gridGenerate();
