// clearCanvas();
drawCanvas(900, 900);

var triangleX = [50, 200, 400, 600, 800];
var rectangleX = [370, 470, 640];
var squareX = 150;
var squareY = 420;

window.setInterval(drawGame, 1);

onKeyUp = onKeyDown = onKeyRight = onKeyLeft = doNothing;
function doNothing() {}

$(document).keydown(function (e) {
  if (e.which == getKeyCode("u")) {
    paddleY = paddleY++ - 20;
  }
  if (e.which == getKeyCode("d")) {
    paddleY = paddleY-- + 20;
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
  if (e.which == 38) {
    // up Arrow
    drawUp();
    return true;
  }
  if (e.which == 40) {
    // Down Arrow
    drawDown();
    return true;
  }
});

var timer = window.setInterval(drawGame, 1);

function drawRight() {
  paddleX = paddleX + 5;
}
function drawLeft() {
  paddleX = paddleX - 5;
}
function drawDown() {
  paddleY = paddleY + 5;
}
function drawUp() {
  paddleY = paddleY - 5;
}
function drawGame() {
  clearCanvas();

  drawFilledRectangle(paddleX, paddleY, 20, 20);
  moveTo(150, 50);
  printTextAtXY(counter++ / 100);
  if (counter == 20000) clearInterval(timer);

  moveTo(200, 100);
  for (var i = 0; i < 3; i++) {
    drawLine(100);
    turnRight(120);
  }

  moveTo(100, 100);
  for (var i = 0; i < 3; i++) {
    drawLine(100);
    turnRight(120);
  }

  moveTo(100, 275);
  for (var i = 0; i < 3; i++) {
    drawLine(100);
    turnLeft(120);
  }

  moveTo(200, 275);
  for (var i = 0; i < 3; i++) {
    drawLine(100);
    turnLeft(120);
  }
}
function drawGame(params) {
  clearCanvas();
  moveTo(0, 450);
  drawLine(900);

  for (let i = 0; i < triangleX.length; i++) {
    moveTo(triangleX[i], 450);
    drawTriangle(25);
    triangleX[i] = triangleX[i] - 1;
    if (triangleX[i] == 0) {
      triangleX[i] = 900;
    }
  }

  for (let i = 0; i < rectangleX.length; i++) {
    drawRectangle(rectangleX[i], 400, 20, 50);
    rectangleX[i] = rectangleX[i] - 1;

    if (rectangleX[i] == 0) {
      rectangleX[i] = 900;
    }
  }

  drawRectangle(squareX, squareY, 30, 30);

  for (let i = 0; i < triangleX.length; i++) {
    const element = triangleX[i];
    if (squareX == triangleX[i]) {
      squareX = squareX = 30;
    }

    if (squareY < 0) {
      squareY = 420;
    }
  }
}

function drawTriangle(size) {
  for (var i = 0; i < 3; i++) {
    drawLine(size);
    turnLeft(120);
  }
}
