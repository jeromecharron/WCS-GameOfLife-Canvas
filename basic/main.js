// The number of alive cells
var nbCells;

// Setup Canvas
var width = height = 100;
var canvas = document.querySelector('canvas');
canvas.width = width;
canvas.height = height;
var nbCellsSpan = document.querySelector('span#nb-cells');
var numCycleSpan = document.querySelector('span#num-cycle');
var ctx = canvas.getContext('2d');
var area = Array(width);


// function to generate random number
function random(min, max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}


// Init our Game Of Life
function init() {
  // ...
}


// Draw a cell
function drawCell(x, y, state) {
  ctx.beginPath();
  if (state == 1) {
    ctx.fillStyle="#000000";
  } else {
    ctx.fillStyle="#FFFFFF";
  }
  ctx.fillRect(x, y, 1, 1);
  ctx.stroke();
}


// Count number of neighbours for a given cell
function countNeighbours(x, y) {
  // ...
}


function updateCells() {
  // ...
}


// ************************************
// Let's go for the conway game of life
// ************************************

// Init the Game
init();

// Add life to cells
var cycle = 0;
function loop() {
  area = updateCells();
  // stop the the animation if it runs out-of-canvas
  if (cycle++ >= 1000) {
    clearInterval(myTimer);
  }
  numCycleSpan.textContent = cycle;
}
var myTimer=setInterval(loop, 200);
