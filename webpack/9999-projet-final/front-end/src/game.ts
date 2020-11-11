import { Arme } from './arme';
import { Scene } from './scene';
import { Player } from './player';
import { StormTrooper } from './storm-trooper';

export type initGame = { nbStormsTroopers: number, frameRate: number };


/**
 * Main class to use to start and stop the game
 */
export class Game {
    //#region Fields
    private nbStormsTroopers:number = 0;
    private frameRate: number = 100;
    private troopers: StormTrooper[] = [];
    private currentScene = new Scene();
    private player: Player;
    //#endregion

    //#region Public methods
    init(param: initGame) {
        this.frameRate = param.frameRate;
        this.nbStormsTroopers = param.nbStormsTroopers;

        this.initEnemies();
        this.initPlayer();
        this.currentScene.init({ rythm: 10, querySelector: '.sliding-background' });
    }

    start() {
        setInterval(() => {
            this.executeFrame();
        })
    }

    stop() {

    }
    //#endregion

    //#region Internal methods
    private animate() {}

    private executeFrame() {

    }

    private initPlayer() {
        this.player = new Player(1, 'Luke', 100, { x: 10, y: 915 });
        this.player.init({ position: { x: 10, y: 900 } });
    }

    private initEnemies() {
        for (let index = 0; index < this.nbStormsTroopers; index++) {
            const arme = new Arme();
            const trooper = new StormTrooper(index, 'matricule' + index, 100, arme);

            this.troopers.push(trooper);   
        }
    }
    //#endregion
}