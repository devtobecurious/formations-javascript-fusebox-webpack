import { Character } from './character';
import { Arme } from './arme';
import { Position } from './position';

//namespace Characters {
export class StormTrooper extends Character {
    constructor(id: number, 
                prenom: string, 
                lifePoints: number = 100,
                arme: Arme,
                positionInitiale ?: Position) {
        super(id, prenom, lifePoints, arme, positionInitiale);
        this.arme = arme;
    }

    //#region Internal methods
    init(options: { position?: Position }) {
        this.createContainer();
        super.init(options);
    }

    protected defineStateAndDirection() {
        this.currentDirection = 'left';
        this.state = 'walk';
    }

    private createContainer() {
        this.container = document.createElement('div');
        this.container.className = `${this.containerKey.replace('.', '')} ${this.state}`;
        this.gameContainer.appendChild(this.container);
    }
    //#endregion

    //#region Properties
    protected get containerKey(): string {
        return '.trooper';
    }
    //#endregion
}
//}