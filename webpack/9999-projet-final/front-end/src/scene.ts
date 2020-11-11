export class Scene {
    private background: HTMLDivElement;
    private backgroudnIndex = 0;
    private rythm = 0;
    public moveEvent = new Event('move');

    constructor() {

    }

    //#region Public methods
    init(options: { rythm: number, querySelector: string }) {
        this.background = document.querySelector(options.querySelector) as HTMLDivElement;
        this.rythm = options.rythm;
        this.animateBackground();
    }
    //#endregion

    //#region Internal methods
    private animateBackground() {
        document.addEventListener('keydown', (event) => {
            if (this.backgroudnIndex > 0) {
                this.backgroudnIndex = 0;
            }

            if (this.backgroudnIndex < -3000) {
                this.backgroudnIndex = 0;
            }

            if (event.key == 'ArrowRight') {
                this.backgroudnIndex -= this.rythm;
            } 
            if (event.key == 'ArrowLeft') {
                this.backgroudnIndex += this.rythm;
            }
            this.background.style.transform = `translate3d(${this.backgroudnIndex}px, 0, 0)`;
        });
    }
    //#endregion
}