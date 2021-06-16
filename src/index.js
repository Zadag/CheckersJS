import gridGenerate from './render';
import Gameboard from './gameboard';

gridGenerate();

// Replace inputs with marker factory once defined
const gameboard = Gameboard({ color: 'red', isKing: false }, { color: 'black', isKing: false });
