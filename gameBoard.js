class GameBoard {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.arr = Array.from(Array(x), () => new Array(y).fill(false));
        this.bDim = 0;
        this.bOp = 1;
    }
    Bisect() {
        const dividers = pow(2, this.bOp);
        const colDelta = (this.x + 1) / dividers;
        for (let o = 1; o < dividers; o += 2) {
            for (let i = 0; i < this.y; i++) {
                let x, y;
                if (this.bDim == 0) {
                    x = colDelta * o;
                    y = i;
                }
                else {
                    y = colDelta * o;
                    x = i;
                }
                this.arr[x][y] = true;
            }
        }
        // if (this.bDim == 0) {
        // this.bDim = 1;
        // }
        // else {
        // this.bDim = 0;
        this.bOp++;
    }
    Draw(grid = true) {
        push();
        const xDelta = width / this.x;
        const yDelta = height / this.y;
        if (grid) {
            for (let x = 0; x <= this.x; x++) {
                line(x * xDelta, 0, x * xDelta, height);
            }
            for (let y = 0; y <= this.y; y++) {
                line(0, y * yDelta, width, y * yDelta);
            }
        }
        for (let x = 0; x < this.x; x++) {
            for (let y = 0; y < this.y; y++) {
                if (this.arr[x][y]) {
                    fill(0);
                    rect(x * xDelta, y * yDelta, xDelta, yDelta)
                }
            }
        }
        pop();
    }
}