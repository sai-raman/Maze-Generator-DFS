let cols,rows;
let w = 20;
let grid = [];
let current;  
let stack = [];
let started = false;

function setup() {
  createCanvas(400, 400);
  noLoop();
  cols = floor(width/w);
  rows = floor(height/w);
  frameRate(10); 
  
  for(let j=0;j<rows;j++){
    for(let i=0;i<cols;i++){
      let cell = new Cell(i,j);
      grid.push(cell);
    }
  }
  current = grid[0];
}


function removeWalls(a,b){
  let x = a.i-b.i;
  if(x === 1){
    a.walls[3] = false;
    b.walls[1] = false;
  } else  if(x === -1){
    a.walls[1] = false;
    b.walls[3] = false;
  }
  
    let y = a.j-b.j;
  if(y === 1){
    a.walls[0] = false;
    b.walls[2] = false;
  } else  if(y === -1){
    a.walls[2] = false;
    b.walls[0] = false;
  }
}



function start(){
  clear();
  w = parseInt(document.getElementById("width").value)
  started = true;
  loop();
}

function draw() {
  if(started){
  background(51);
  for(let i=0;i<grid.length;i++){
    grid[i].show();
  }
  current.visited = true;
  let next = current.checkNeighbors(grid,rows,cols);
  current.highlight();
  if(next){
    next.visited = true;
    stack.push(current);
    removeWalls(current,next);
    current = next;
  } else if(stack.length>0) {
    current = stack.pop();
  }
  }
}