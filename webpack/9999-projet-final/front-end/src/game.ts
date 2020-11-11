import { Arme } from './arme';
import { Scene } from './scene';
import { Player } from './player';
import { StormTrooper } from './storm-trooper';
import { Position } from './position';

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

    private executeFrame(): void {
        this.createRandomEnemy();
        this.moveEnemies();
    }

    private initPlayer(): void {
        this.player = new Player(1, 'Luke', 100, new Arme());
        this.player.init({ position: { x: 0, y: 1030 } });
    }

    private moveEnemies(): void {
        this.troopers.forEach(trooper => {
            this.moveOneEnemy(trooper);
            this.removeWhenOutsideWindow(trooper);
        });
    }

    private moveOneEnemy(enemy: StormTrooper): void {
        enemy.move({
            x: -1,
            y: 0
        });
    }

    private removeWhenOutsideWindow(enemy: StormTrooper): void {
        if (! enemy.isInsideScene) {
            const index = this.troopers.indexOf(enemy);
            this.troopers.splice(index, 1);
        }
    }

    private createRandomEnemy(): void {
        if (this.troopers.length < this.nbStormsTroopers - 1) {
            const createNewTrooper = Math.random() > 0.8;

            if (createNewTrooper) {
                const trooper = this.createOneEnemy();
                trooper.init({
                    position: this.newRandomPosition()
                });
            }
        }
    }

    private newRandomPosition(): Position {
        const position = new Position();

        position.y = 1043;
        position.x = 100 + Math.floor((Math.random() * window.innerWidth - 150));

        return position;
    }

    private createOneEnemy(addInArray: boolean = true): StormTrooper {
        const arme = new Arme();
        const trooper = new StormTrooper(this.troopers.length + 1, 'matricule' + this.troopers.length + 1, 100, arme);

        if (addInArray) {
            this.troopers.push(trooper);   
        }

        return trooper;
    }
    //#endregion
}