// The number of alive cells
var nbCells = random(100, 1000);

// Setup Canvas
var canvas = document.querySelector('canvas');
var nbCellsSpan = document.querySelector('span#nb-cells');
var numCycleSpan = document.querySelector('span#num-cycle');
var ctx = canvas.getContext('2d');
var width = height = 100;
var area = Array(width);


// function to generate random number
function random(min, max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}


// Draw a cell
function drawCell(x, y, state) {
  ctx.beginPath();
  if (state == 0) {
    ctx.fillStyle="#FFFFFF";
  } else {
    ctx.fillStyle="#000000";
  }
  ctx.fillRect(x, y, 1, 1);  
  ctx.stroke();
}


function updateCells() {
  // ...
}


// ************************************
// Let's go for the conway game of life
// ************************************

// Init the Game
// ...

// Add life to cells
var cycle = 0;
function loop() {
  updateCells();
  if (cycle++ >= 1000) {
    clearInterval(myTimer);
  }
  numCycleSpan.textContent = cycle;
}
var myTimer=setInterval(loop, 1); 

