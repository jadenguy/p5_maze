let b;
function setup() {
  createCanvas(windowWidth, windowHeight - 4);
  background(220);
  stroke(0);
  fill(255);
  b = new GameBoard(81, 81);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 4);
  background(220);
  draw();
}
function draw() {
  b.Draw();
  noLoop();
}
function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}
function average(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length
}