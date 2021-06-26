import gridGenerate from './render';
import Gameboard from './gameboard';
import markerFactory from './markerFactory';
import playerFactory from './playerFactory';
import gameController from './gameController';

gridGenerate();

const gameboard = Gameboard(markerFactory);
