drawCanvas(400, 400);

var paddleX = 50;
var paddleY = 330;
var square1X = 140;
var square1Y = 130;
var square2X = 190;
var square2Y = 140;
var square3X = 240;
var square3Y = 130;
var square4X = 240;
var square4Y = 230;
var square5X = 140;
var square5Y = 230;
var hideSquare1 = false;
var hideSquare2 = false;
var hideSquare3 = false;
var hideSquare4 = false;
var hideSquare5 = false;

var counter = 0;

onKeyUp = onKeyDown = onKeyRight = onKeyLeft = doNothing;
function doNothing() {}

$(document).keydown(function(e) {
  if (e.which == getKeyCode("u")) {
    paddleY = paddleY - 20;
  }
  if (e.which == getKeyCode("d")) {
    paddleY = paddleY + 20;
  }
  if (e.which == 40) {
    // Arrow Down

    drawDown();
    return false;
  }
  if (e.which == 38) {
    // Arrow Up

    drawUp();
    return false;
  }
  if (e.which == 39) {
    // Right Arrow

    drawRight();
    return false;
  }
  if (e.which == 37) {
    // Left Arrow

    drawLeft();
    return false;
  }
});

var timer = window.setInterval(drawGame, 1);

function drawRight() {
  paddleX = paddleX + 5;
}
function drawLeft() {
  paddleX = paddleX - 5;
}
function drawUp() {
  paddleY = paddleY - 5;
}
function drawDown() {
  paddleY = paddleY + 5;
}

function drawGame() {
  clearCanvas();

  drawFilledRectangle(paddleX, paddleY, 20, 20);
  moveTo(150, 50);
  printTextAtXY(counter++ / 100);
  if (counter == 1000) clearInterval(timer);

  // for (var i = 0; i < 4; i++) {
  //   drawLine(300);
  //   turnRight(90);
  // }

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

  moveTo(150, 187);
  drawLine(100);

  //Square 1

  if (hideSquare1 == false) {
    moveTo(square1X, square1Y);
    for (var i = 0; i < 4; i++) {
      drawLine(20);
      turnRight(90);
    }
  }

  if (hideSquare2 == false) {
    moveTo(square2X, square2Y);
    for (var i = 0; i < 4; i++) {
      drawLine(20);
      turnRight(90);
    }
  }
  if (hideSquare3 == false) {
    moveTo(square3X, square3Y);
    for (var i = 0; i < 4; i++) {
      drawLine(20);
      turnRight(90);
    }
  }
  if (hideSquare4 == false) {
    moveTo(square4X, square4Y);
    for (var i = 0; i < 4; i++) {
      drawLine(20);
      turnRight(90);
    }
  }
  if (hideSquare5 == false) {
    moveTo(square5X, square5Y);
    for (var i = 0; i < 4; i++) {
      drawLine(20);
      turnRight(90);
    }
  }

  if (paddleX == square1X && paddleY == square1Y) {
    hideSquare1 = true;
  }
  if (paddleX == square2X && paddleY == square2Y) {
    hideSquare2 = true;
  }
  if (paddleX == square3X && paddleY == square3Y) {
    hideSquare3 = true;
  }
  if (paddleX == square4X && paddleY == square4Y) {
    hideSquare4 = true;
  }
  if (paddleX == square5X && paddleY == square5Y) {
    hideSquare5 = true;
  }
}

function getKeyCode(char) {
  var keyCode = char.charCodeAt(0);
  if (keyCode > 90) {
    // 90 is keyCode for 'z'
    return keyCode - 32;
  }
  return keyCode;
}
