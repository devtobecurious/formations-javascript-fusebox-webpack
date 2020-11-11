import { Character } from './character';
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
                this.state = 'walk';
                this.container.className = 'player ' + this.state;
            });

            document.addEventListener('keyup', (event) => {
                this.state = 'idle';
                this.container.className = 'player ' + this.state;
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