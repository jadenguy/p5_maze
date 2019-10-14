let b;
const gridSize = 63;
function setup() {
  createCanvas(windowWidth, windowHeight - 4);
  background(220);
  stroke(0);
  fill(255);
  b = new GameBoard(gridSize, gridSize);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 4);
  background(220);
  draw();
}
function draw() {
  b.Draw();
  // noLoop();
  if (frameCount % 60 == 0) {
    b.Bisect();
  }
}
function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}
function average(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length
}