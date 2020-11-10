import { Position } from './position';

// export abstract class Character {
//     id: number = 0;
//     label: string = '';
//     lifePoints: number = 100;

//     constructor(id: number, prenom: string, lifePoints: number = 100) {
//         this.id = id;
//         this.label = prenom;
//         this.lifePoints = lifePoints;
//     }
    
// }

//namespace Characters {
    export abstract class Character {
        private positionCourante: Position = new Position();

        constructor(public id: number, 
                    public prenom: string, 
                    public lifePoints: number = 100,
                    positionInitiale ?: Position) {

            if (positionInitiale) {
                this.positionCourante = positionInitiale;
            }
        }
    
        
    }
//}

