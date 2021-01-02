drawCanvas(450, 450);

var paddleX = 200;
var paddleY = 65;
var tree1X = 20;
var tree1Y = 20;
var tree2X = 20;
var tree2Y = 125;
var square1X = 200;
var square1Y = 10;
var square2X = 200;
var square2Y = 110;
var square3X = 370;
var square3Y = 110;
var square4X = 370;
var square4Y = 10;
var gorrillaX = 20;
var gorrillaY = 20;
var hideperson = false;
onKeyRight = onKeyLeft = doNothing;
function doNothing() {}

$(document).keydown(function(e) {
  if (e.which == getKeyCode("l")) {
    gorrillaY = gorrillaY - 2;
  }
  if (e.which == getKeyCode("r")) {
    gorrillaY = gorrillaY + 2;
  }

  if (e.which == 39) {
    // Right Arrow
    drawRight();
    return true;
  }
  if (e.which == 37) {
    // Left Arrow
    drawLeft();
    return true;
  }
});
function drawRight() {
  gorrillaX = gorrillaX + 5;
}
function drawLeft() {
  gorrillaY = gorrillaY - 5;
}
window.setInterval(drawGame, 1);
function drawGame() {
  clearCanvas();
  if (hideperson == false) {
    drawFilledRectangle(paddleX, paddleY, 20, 20);
  }
  drawRectangle(60, 65, gorrillaX, gorrillaY);

  tree1X == 0 ? (tree1X = 450) : tree1X--;
  tree2X == 0 ? (tree2X = 450) : tree2X--;

  square1X == 0 ? (square1X = 450) : square1X--;
  square2X == 0 ? (square2X = 450) : square2X--;
  square3X == 0 ? (square3X = 450) : square3X--;
  square4X == 0 ? (square4X = 450) : square4X--;

  drawCircle(10, tree1X, tree1Y);
  drawCircle(10, tree2X, tree2Y);
  moveTo(50, 50);
  for (var i = 0; i < 2; i++) {
    drawLine(350);
    turnRight(90);
    drawLine(50);
    turnRight(90);
  }

  moveTo(square1X, square1Y);
  for (var i = 0; i < 4; i++) {
    drawLine(20);
    turnRight(90);
  }
  moveTo(square2X, square2Y);
  for (var i = 0; i < 4; i++) {
    drawLine(20);
    turnRight(90);
  }
  moveTo(square3X, square3Y);
  for (var i = 0; i < 4; i++) {
    drawLine(20);
    turnRight(90);
  }
  moveTo(square4X, square4Y);
  for (var i = 0; i < 4; i++) {
    drawLine(20);
    turnRight(90);
  }
}
// function drawRight() {
//   gorrillaX = gorrillaY - 5;
// }
// function drawLeft() {
//   gorrillaX = gorrillaY - 5;
// }
function getKeyCode(char) {
  var keyCode = char.charCodeAt(0);
  if (keyCode > 90) {
    // 90 is keyCode for 'z'
    return keyCode - 32;
  }
  return keyCode;
}
if (gorrillaX == paddleX && gorrillaY == paddleY) {
  hideperson = true;
}
