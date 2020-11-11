import { Position } from './position';
import { Vector } from './vector';

export type state = 'idle' | 'walk' | 'jump' | 'fight' | 'died';

//namespace Characters {
    export abstract class Character {
        //#region Fields
        private positionCourante: Position = new Position();
        protected container: HTMLDivElement;
        protected state: state;
        //#endregion

        constructor(public id: number, 
                    public prenom: string, 
                    public lifePoints: number = 100,
                    positionInitiale ?: Position) {

            if (positionInitiale) {
                this.positionCourante = positionInitiale;
            }
        }
    
        //#region Public methods
        init(options: { position?: Position }) {
            this.defineContainer(options);

            this.state = 'idle';
        }

        move(vector?: Vector) {            
        }
        //#endregion

        //#region Internal methods
        protected defineContainer(options: { position?: Position }) {
            this.container = document.querySelector(this.containerKey);

            this.container.style.left = options?.position?.x + 'px';
            this.container.style.top = options?.position?.y +'px';
        }
        //#endregion

        //#region Properties
        protected abstract get containerKey(): string;
        //#endregion
    }
//}

