drawCanvas(900, 900);

var triangleX = [50, 200, 400, 600, 800];
var rectangleX = [370, 470, 640];
var squareX = 150;
var squareY = 420;

window.setInterval(drawGame, 1);

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
      squareY = squareY - 50;
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
