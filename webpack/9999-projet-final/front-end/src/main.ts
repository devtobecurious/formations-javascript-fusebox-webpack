import { Game } from './game';

const game = new Game();

let index = 0;
let rythm = 10;

const background = document.querySelector('.sliding-background') as HTMLDivElement;
const player = document.querySelector('.player') as HTMLDivElement;

player.style.left = '10px';
player.style.top = '315px';

document.addEventListener('keydown', (event) => {
    if (index > 0) {
        index = 0;
    }

    if (index < -3000) {
        index = 0;
    }

    if (event.key == 'ArrowRight') {
        index -= rythm;
    } 
    if (event.key == 'ArrowLeft') {
        index += rythm;
    }
    background.style.transform = `translate3d(${index}px, 0, 0)`;
});

game.init({
    frameRate: 100,
    nbStormsTroopers: 20
});

game.start();