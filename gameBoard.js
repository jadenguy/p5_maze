const fillBool = false;
class GameBoard {
    constructor(size) {
        this.size = pow(2, size) - 1;
        this.arr = Array.from(Array(this.size), () => new Array(this.size).fill(fillBool));
        this.bOp = 0;
    }
    Update() {
        let chunk = (this.size + 1) / pow(2, floor(this.bOp / 2))
        if (chunk > 4 || (chunk == 4 && this.bOp % 2 == 0)) {
            let w = chunk, h = chunk;
            if (this.bOp % 2 != 0) {
                w /= 2;
            }
            // print(w, h, this.size / w* this.size / h);
            for (let x = 0; x < this.size; x += w) {
                for (let y = 0; y < this.size; y += h) {
                    // print(x, y, w, h, this.bOp);
                    this.Bisect(x, y, w, h);
                }
            }
            this.bOp++;
            return true;
        }
        else {
            return false;
        }
        // print(chunk);
    }
    Bisect(x, y, w, h) {
        const rand = random();
        const lrSplit = w < h;
        // print('dividing', '')
        i = 0;
        if (lrSplit) {
            const leaveAlone = floor(map(rand, 0, 1, x + 1, x + w) / 2) * 2;
            for (let xIndex = x; xIndex < x + w - 1; xIndex++) {
                const yIndex = y + h / 2 - 1;
                const current = this.arr[xIndex][yIndex];
                const isDoorway = xIndex == leaveAlone;
                // if (isDoorway && current) {
                //     print("collision")
                // }
                this.arr[xIndex][yIndex] = !(current || isDoorway);
                i++;
            }
        }
        else {
            const leaveAlone = floor(map(rand, 0, 1, y + 1, y + h) / 2) * 2;
            for (let yIndex = y; yIndex < y + h - 1; yIndex++) {
                const xIndex = x + w / 2 - 1;
                const current = this.arr[xIndex][yIndex];
                const isDoorway = yIndex == leaveAlone;
                // if (isDoorway && current) {
                //     print("collision")
                // }
                this.arr[xIndex][yIndex] = !(current || isDoorway);
                i++;
            }
        }
        // print(i);
    }
    Draw(grid = true) {
        push();
        const xDelta = width / this.size;
        const yDelta = height / this.size;
        fill(0);
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
                if (this.arr[x][y] != fillBool) {

                    rect(x * xDelta, y * yDelta, xDelta, yDelta)
                }
            }
        }
        pop();
    }
}