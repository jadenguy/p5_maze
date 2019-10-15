class SubBoard {
    constructor(x, y, w, h, across = true, z = 0) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.z = z;
        this.across = across;
    }
}
class GameBoard {
    constructor(mag) {
        this.size = pow(2, mag) - 1;
        this.arr = Array.from(Array(this.size), () => new Array(this.size).fill(false));
        this.queue = [];
        this.queue.push(new SubBoard(0, 0, this.size + 1, this.size + 1, random() > .5, 0));
    }
    FillMaze() {
        while (this.Subdivide()) { }
    }
    Subdivide() {
        if (this.queue.length > 0) {
            const q = this.queue.shift();
            const x = q.x;
            const y = q.y;
            const w = q.w;
            const h = q.h;
            const across = q.across;
            const z = q.z;
            this.Bisect(x, y, w, h, across);
            if (w * h <= 8) {
                this.queue.length = 0;
                return false;
            }
            else if (w > h) {
                this.queue.push(new SubBoard(x, y, w / 2, h, random() > .5, z + 1));
                this.queue.push(new SubBoard(x + w / 2, y, w / 2, h, random() > .5, z + 1));
            }
            else if (w < h) {
                this.queue.push(new SubBoard(x, y, w, h / 2, random() > .5, z + 1));
                this.queue.push(new SubBoard(x, y + h / 2, w, h / 2, random() > .5, z + 1));
            }
            else if (w == h) {
                if (!across) {
                    this.queue.push(new SubBoard(x, y, w / 2, h, true, z + 1));
                    this.queue.push(new SubBoard(x + w / 2, y, w / 2, h, true, z + 1));
                }
                else {
                    this.queue.push(new SubBoard(x, y, w, h / 2, false));
                    this.queue.push(new SubBoard(x, y + h / 2, w, h / 2, false, z + 1));
                }
            }
            return true;
        }
        else {
            return false;
        }
    }
    Bisect(x, y, w, h, across = w < h) {
        const rand = random();
        if (across) {
            const leaveAlone = floor(map(rand, 0, 1, x, x + w) / 2) * 2;
            for (let xIndex = x; xIndex < x + w - 1; xIndex++) {
                const yIndex = y + h / 2 - 1;
                const current = this.arr[xIndex][yIndex];
                const isDoorway = xIndex == leaveAlone;
                this.arr[xIndex][yIndex] = !(current || isDoorway);
            }
        }
        else {
            const leaveAlone = floor(map(rand, 0, 1, y, y + h) / 2) * 2;
            for (let yIndex = y; yIndex < y + h - 1; yIndex++) {
                const xIndex = x + w / 2 - 1;
                const current = this.arr[xIndex][yIndex];
                const isDoorway = yIndex == leaveAlone;
                this.arr[xIndex][yIndex] = !(current || isDoorway);
            }
        }
    }
    Draw(grid = true) {
        push();
        const xDelta = width / this.arr.length;
        const yDelta = height / this.arr.length;
        if (grid) {
            stroke(150);
            for (let x = 0; x <= this.arr.length; x++) {
                line(x * xDelta, 0, x * xDelta, height);
            }
            for (let y = 0; y <= this.arr.length; y++) {
                line(0, y * yDelta, width, y * yDelta);
            }
        }
        noStroke();
        fill(0);
        for (let x = 0; x < this.arr.length; x++) {
            for (let y = 0; y < this.arr.length; y++) {
                if (this.arr[x][y]) {
                    rect(x * xDelta, y * yDelta, xDelta, yDelta)
                }
            }
        }
        pop();
    }
}