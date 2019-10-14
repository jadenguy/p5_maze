class GameBoard {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    Draw() {
        const xDelta = width / this.x;
        const yDelta = height / this.y;
        for (let x = 0; x <= this.x; x++) {
            line(x * xDelta, 0, x * xDelta, height);
        }
        for (let y = 0; y <= this.y; y++) {
            line(0,y * yDelta, width, y*yDelta);
        }
    }
}