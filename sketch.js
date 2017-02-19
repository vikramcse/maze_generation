var WIDTH = 400;
var HEIGHT = 400;

var cols, rows;

// width is the size of the cell
var cellWidth = 40;

// list to store all the cell objects
var grid = [];

function setup() {
  createCanvas(WIDTH, HEIGHT);

  cols = floor(WIDTH / cellWidth);
  rows = floor(HEIGHT / cellWidth);

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }
}

function draw() {
  background(51);

  // display all the cells pushed to the grid
  for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }
}

function Cell(i, j) {
  this.i = i;
  this.j = j;
}

Cell.prototype.show = function() {
  var x = this.i * cellWidth;
  var y = this.j * cellWidth;

  stroke(255);

  // we did this step instead of simply adding rect
  // because for maze generation we need to hide some
  // the sides if the react.
  // we could have used this code
  // noFill();
  // rect(x, y, cellWidth, cellWidth);

  line(x, y, x + cellWidth, y);
  line(x + cellWidth, y, x + cellWidth, y + cellWidth);
  line(x + cellWidth, y + cellWidth, x, y + cellWidth);
  line(x, y + cellWidth, x, y);
};