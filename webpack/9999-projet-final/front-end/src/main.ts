import { Game } from './game';

const game = new Game();

game.init({
    frameRate: 100,
    nbStormsTroopers: 2
});

game.start();