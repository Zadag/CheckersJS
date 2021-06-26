import gridGenerate from './render';
import Gameboard from './gameboard';
import markerFactory from './markerFactory';
import playerFactory from './playerFactory';

gridGenerate();

const gameboard = Gameboard(markerFactory);
