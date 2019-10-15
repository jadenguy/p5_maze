let b;
let i = 0;
const gridPower = 8;
function setup() {
  createCanvas(min(windowWidth, windowHeight), min(windowWidth, windowHeight) - 4);
  background(220);
  noStroke();
  fill(255);
  b = new GameBoard(gridPower);
}
function windowResized() {
  resizeCanvas(min(windowWidth, windowHeight), min(windowWidth, windowHeight) - 4);
  background(220);
  draw();
}
function draw() {
  b.Draw(false);
  b.Subdivide();
}
// function mouseClicked() {
//   b.Update();
// }
function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}
function average(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length
}