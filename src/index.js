import gridGenerate from './render';
import Gameboard from './gameboard';
import markerFactory from './markerFactory';
import playerFactory from './playerFactory';
import displayController from './displayController';
import gameController from './gameController';

gridGenerate();

const gameboard = Gameboard(markerFactory);
gameController(playerFactory, gameboard, displayController);
