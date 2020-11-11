import { Arme } from './arme';
import { Position } from './position';
import { Vector } from './vector';

export type State = 'idle' | 'walk' | 'jump' | 'fight' | 'died';
export type Direction = 'right' | 'left';

//namespace Characters {
    export abstract class Character {
        //#region Fields
        private positionCourante: Position = new Position();
        protected container: HTMLDivElement;
        protected gameContainer: HTMLDivElement;
        protected state: State;
        protected currentPosition: Position;
        protected currentDirection: Direction;
        //#endregion

        constructor(public id: number, 
                    public prenom: string, 
                    public lifePoints: number = 100,
                    public arme: Arme,
                    positionInitiale ?: Position) {
            
            this.gameContainer = document.querySelector('.game');
            if (positionInitiale) {
                this.positionCourante = positionInitiale;
            }
        }
    
        //#region Public methods
        init(options: { position?: Position }): void {
            this.defineStateAndDirection();
            this.defineContainer(options);
        }

        move(vector?: Vector): void {  
            this.currentPosition.x += vector.x;
            this.currentPosition.y += vector.y;

            this.moveContainer(this.currentPosition);
            this.killWhenOutsideBorders();
        }

        attack(enemy: Character): void {
            enemy.lifePoints -= this.arme.pointsAttaque;
        }

        defense(enemy: Character): void {
            
        }
        //#endregion

        //#region Internal methods
        

        protected killWhenOutsideBorders() {
            if (! this.isInsideScene) {
                this.gameContainer.removeChild(this.container);
            }
        }

        protected defineStateAndDirection() {
            this.state = 'idle';
            this.currentDirection = 'right';
        }

        protected defineContainer(options: { position?: Position }) {
            this.container = document.querySelector(this.containerKey);
            this.currentPosition = options.position;

            this.container.className = this.containerKey.replace('.', '' ) + ' ' + this.state;

            this.moveContainer(this.currentPosition);
        }

        protected moveContainer(position?: Position) {
            this.container.style.left = position?.x + 'px';
            this.container.style.top = position?.y +'px';
        }
        //#endregion

        //#region Properties
        protected abstract get containerKey(): string;

        get isInsideScene(): boolean {
            return this.currentPosition.x > -100 && this.currentPosition.y < window.innerWidth; 
        }

        get isNearEnemy(): boolean {
            return this.currentPosition.x >= 0 && this.currentPosition.x <= 10;
        }
        //#endregion
    }
//}

