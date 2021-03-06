import { Character, Direction } from './character';
import { Position } from './position';

//namespace Characters {
    export class Player extends Character {
        //#region Public methods
        init(options: { position?: Position }) {
            super.init(options);
            this.detectedMoveAnimation();
        }

        move(position?: Position) {
        }
        //#endregion

        //#region Internal methods
        private detectedMoveAnimation() {
            document.addEventListener('keydown', (event) => {
                if (event.key == 'ArrowRight' || event.key == 'ArrowLeft') {
                    this.state = 'walk';

                    this.currentDirection = event.key.toLocaleLowerCase().replace('arrow', '') as Direction;
                }

                if (event.key == ' ') {
                    this.state = 'fight';
                }

                this.defineAnimationWithDirection();
            });

            document.addEventListener('keyup', (event) => {
                setTimeout(() => {
                    this.state = 'idle';
                    this.defineAnimationWithDirection();
                }, 400);
            });
        }
        //#endregion

        //#region Properties
        protected get containerKey(): string {
            return '.player';
        }
        //#endregion
    }
//}