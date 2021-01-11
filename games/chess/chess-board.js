drawCanvas(300, 300);
var timer = window.setInterval(drawGame, 1);
var X;
var line1Y = 10;
drawGame();

function drawGame(params) {
  clearCanvas();
  line1Y = 10;
  for (let index = 0; index < 4; index++) {
    X = -20;

    for (let i = 0; i < 4; i++) {
      X = X + 30;
      drawRectangle(X, line1Y, 30, 30);
      X = X + 30;
      drawFilledRectangle(X, line1Y, 30, 30);
    }

    X = -20;
    line1Y = line1Y + 30;

    for (let i = 0; i < 4; i++) {
      X = X + 30;
      drawFilledRectangle(X, line1Y, 30, 30);
      X = X + 30;
      drawRectangle(X, line1Y, 30, 30);
    }
    line1Y = line1Y + 30;
  }
}
