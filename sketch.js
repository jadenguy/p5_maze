let b;
let i = 0;
const gridPower = 5;
function setup() {
  createCanvas(windowWidth, windowHeight - 4);
  background(220);
  stroke(0);
  fill(255);
  b = new GameBoard(gridPower);
  while (b.Update()) {

  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 4);
  background(220);
  draw();
}
function draw() {
  b.Draw();
}
function mouseClicked() {
  b.Update();
}
function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}
function average(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length
}