import gridGenerate from './render';
import Gameboard from './gameboard';
import markerFactory from './markerFactory';

gridGenerate();

const gameboard = Gameboard(markerFactory);
