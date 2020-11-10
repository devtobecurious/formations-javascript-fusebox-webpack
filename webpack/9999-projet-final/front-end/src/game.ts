import { Arme } from './arme';
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
    //#endregion

    //#region Public methods
    init(param: initGame) {
        this.frameRate = param.frameRate;
        this.nbStormsTroopers = param.nbStormsTroopers;

        this.initEnemies();
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
    private executeFrame() {

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