drawCanvas(450, 450);

var paddleX = 50;
var paddleY = 100;
var ballX = 240;
var ballY = 440;
var ballShooterX = 220;
var ballShooterY = 440;
var counter = 0;

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
}

var timer = window.setInterval(drawGame, 1);

function drawGame() {
  clearCanvas();
  moveTo(180, 300);
  printTextAtXY(counter++ / 100);
  if (counter == 20000) clearInterval(timer);

  //   drawCircle(10, 200, 200);
  //   drawCircle(10, 240, 200);
  ballY = ballY - 1;
  if (ballY == 0) {
    ballY = 440;
  }
  drawCircle(10, ballX, ballY);

  ballShooter();

  var x = 0;
  var y = 0;

  ({ x, y } = createSquares(x, y));
}

function createSquares(x, y) {
  for (var k = 0; k < 3; k++) {
    x = 0;
    y = y + 50;
    for (var j = 0; j < 8; j++) {
      x = x + 50;
      moveTo(x, y);
      for (var i = 0; i < 4; i++) {
        drawLine(20);
        turnLeft(90);
      }
    }
  }
  return { x, y };
}

function ballShooter() {
  moveTo(ballShooterX, ballShooterY);
  for (var i = 0; i < 3; i++) {
    drawLine(40);
    turnLeft(120);
  }
  return i;
}

function getKeyCode(char) {
  var keyCode = char.charCodeAt(0);
  if (keyCode > 90) {
    // 90 is keyCode for 'z'
    return keyCode - 32;
  }
  return keyCode;
}

function drawRight() {
  paddleX = paddleX + 5;
}
function drawLeft() {
  paddleX = paddleX - 5;
}
function drawDown() {
  paddleX = paddleX + 5;
}
function drawUp(){
  paddleX = paddleX + 5;
}
