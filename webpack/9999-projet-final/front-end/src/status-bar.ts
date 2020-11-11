import { Player } from "./player";

export class StatusBar {
    //#region Fields
    private player: Player;
    private container: HTMLDivElement;
    private pxContainer: HTMLDivElement;
    //#endregion

    constructor() {
        this.container = document.querySelector('.status-bar');
        this.pxContainer = this.container.querySelector('.px');
    }

    //#region Public methods
    init(player: Player): void {
        this.player = player;
    }

    update(): void {
        this.pxContainer.innerText = `${this.player.lifePoints} PX`;
    }
    //#endregion
}