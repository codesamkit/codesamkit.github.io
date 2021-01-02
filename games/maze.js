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
var square6X = 100;
var square6Y = 185;
var square7X = 190;
var square7Y = 210;
var square8X = 280;
var square8Y = 185;
var square9X = 187;
var square9Y = 70;
var square10X = 190;
var square10Y = 285;
var square11X = 100;
var square11Y = 285;
var square12X = 280;
var square12Y = 285;
var square13X = 280;
var square13Y = 70;
var square14X = 100;
var square14Y = 70;
var square15X = 305;
var square15Y = 100;
var square16X = 75;
var square16Y = 100;
var square17X = 75;
var square17Y = 255;
var square18X = 305;
var square18Y = 255;
var hideSquare1 = false;
var hideSquare2 = false;
var hideSquare3 = false;
var hideSquare4 = false;
var hideSquare5 = false;
var hideSquare6 = false;
var hideSquare7 = false;
var hideSquare8 = false;
var hideSquare9 = false;
var hideSquare10 = false;
var hideSquare11 = false;
var hideSquare12 = false;
var hideSquare13 = false;
var hideSquare14 = false;
var hideSquare15 = false;
var hideSquare16 = false;
var hideSquare17 = false;
var hideSquare18 = false;
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
  if (hideSquare6 == false) {
    moveTo(square6X, square6Y);
    for (var i = 0; i < 4; i++) {
      drawLine(20);
      turnRight(90);
    }
  }
  if (hideSquare7 == false) {
    moveTo(square7X, square7Y);
    for (var i = 0; i < 4; i++) {
      drawLine(20);
      turnRight(90);
    }
  }
  if (hideSquare8 == false) {
    moveTo(square8X, square8Y);
    for (var i = 0; i < 4; i++) {
      drawLine(20);
      turnRight(90);
    }
  }
  if (hideSquare9 == false) {
    moveTo(square9X, square9Y);
    for (var i = 0; i < 4; i++) {
      drawLine(20);
      turnRight(90);
    }
  }
  if (hideSquare10 == false) {
    moveTo(square10X, square10Y);
    for (var i = 0; i < 4; i++) {
      drawLine(20);
      turnRight(90);
    }
  }
  if (hideSquare11 == false) {
    moveTo(square11X, square11Y);
    for (var i = 0; i < 4; i++) {
      drawLine(20);
      turnRight(90);
    }
  }
  if (hideSquare12 == false) {
    moveTo(square12X, square12Y);
    for (var i = 0; i < 4; i++) {
      drawLine(20);
      turnRight(90);
    }
  }
  if (hideSquare13 == false) {
    moveTo(square13X, square13Y);
    for (var i = 0; i < 4; i++) {
      drawLine(20);
      turnRight(90);
    }
  }
  if (hideSquare14 == false) {
    moveTo(square14X, square14Y);
    for (var i = 0; i < 4; i++) {
      drawLine(20);
      turnRight(90);
    }
  }
  if (hideSquare14 == false) {
    moveTo(square14X, square14Y);
    for (var i = 0; i < 4; i++) {
      drawLine(20);
      turnRight(90);
    }
  }
  if (hideSquare15 == false) {
    moveTo(square15X, square15Y);
    for (var i = 0; i < 4; i++) {
      drawLine(20);
      turnRight(90);
    }
  }
  if (hideSquare16 == false) {
    moveTo(square16X, square16Y);
    for (var i = 0; i < 4; i++) {
      drawLine(20);
      turnRight(90);
    }
  }
  if (hideSquare17 == false) {
    moveTo(square17X, square17Y);
    for (var i = 0; i < 4; i++) {
      drawLine(20);
      turnRight(90);
    }
  }

  if (hideSquare18 == false) {
    moveTo(square18X, square18Y);
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
  if (paddleX == square6X && paddleY == square6Y) {
    hideSquare6 = true;
  }
  if (paddleX == square7X && paddleY == square7Y) {
    hideSquare7 = true;
  }
  if (paddleX == square8X && paddleY == square8Y) {
    hideSquare8 = true;
  }
  if (paddleX == square9X && paddleY == square9Y) {
    hideSquare9 = true;
  }
  if (paddleX == square10X && paddleY == square10Y) {
    hideSquare10 = true;
  }
  if (paddleX == square11X && paddleY == square11Y) {
    hideSquare11 = true;
  }
  if (paddleX == square12X && paddleY == square12Y) {
    hideSquare12 = true;
  }
  if (paddleX == square13X && paddleY == square13Y) {
    hideSquare13 = true;
  }
  if (paddleX == square14X && paddleY == square14Y) {
    hideSquare14 = true;
  }
  if (paddleX == square15X && paddleY == square15Y) {
    hideSquare15 = true;
  }
  if (paddleX == square16X && paddleY == square16Y) {
    hideSquare16 = true;
  }
  if (paddleX == square17X && paddleY == square17Y) {
    hideSquare17 = true;
  }
  if (paddleX == square18X && paddleY == square18Y) {
    hideSquare18 = true;
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
