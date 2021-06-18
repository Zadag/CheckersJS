import gridGenerate from './render';
import Gameboard from './gameboard';
import MarkerFactory from './markerFactory';

gridGenerate();

const gameboard = Gameboard(MarkerFactory('red'), MarkerFactory('black'));
