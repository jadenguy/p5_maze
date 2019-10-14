class GameBoard {
    constructor(size) {
        this.size = size;
        this.arr = Array.from(Array(size), () => new Array(size).fill(false));
        this.bDim = 1;
        this.bOp = 1;
    }
    Bisect() {
        const dividers = pow(2, this.bOp);
        const colDelta = (this.size + 1) / dividers;
        if (colDelta > 1) {
            for (let o = 1; o < dividers; o += 2) {
                for (let i = 0; i < this.size; i++) {
                    let x, y;
                    if (this.bDim % 2 == 0) {
                        x = colDelta * o - 1;
                        y = i;
                    }
                    else {
                        y = colDelta * o - 1;
                        x = i;
                    }
                    this.arr[x][y] = true;
                }
            }
        }
        if (this.bDim % 2 == 0) {
            this.bOp++;
        }
        this.bDim++;
    }
    Draw(grid = true) {
        push();
        const xDelta = width / this.size;
        const yDelta = height / this.size;
        if (grid) {
            for (let x = 0; x <= this.size; x++) {
                line(x * xDelta, 0, x * xDelta, height);
            }
            for (let y = 0; y <= this.size; y++) {
                line(0, y * yDelta, width, y * yDelta);
            }
        }
        for (let x = 0; x < this.size; x++) {
            for (let y = 0; y < this.size; y++) {
                if (this.arr[x][y]) {
                    fill(0);
                    rect(x * xDelta, y * yDelta, xDelta, yDelta)
                }
            }
        }
        pop();
    }
}