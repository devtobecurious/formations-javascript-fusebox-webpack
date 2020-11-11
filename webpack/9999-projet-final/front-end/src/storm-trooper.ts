import { Character } from './character';
import { Arme } from './arme';
import { Position } from './position';

//namespace Characters {
export class StormTrooper extends Character {
    private arme: Arme = new Arme();

    constructor(id: number, 
                prenom: string, 
                lifePoints: number = 100,
                arme: Arme,
                positionInitiale ?: Position) {
        super(id, prenom, lifePoints, positionInitiale);
        this.arme = arme;
    }

    //#region Properties
    protected get containerKey(): string {
        return '.trooper';
    }
    //#endregion
}
//}