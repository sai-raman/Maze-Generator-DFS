class Cell{
  constructor(i,j,w){
    this.i = i;
    this.j = j;
    this.w = w;
    this.walls = [true,true,true,true];
    this.visited = false;
  }
  
  show(){
    let x = this.i*w;
    let y = this.j*w;
    stroke(255);
    if(this.walls[0]){
    line(x,y,x+w,y);      
    }
    if(this.walls[1]){
    line(x+w,y,x+w,y+w );
    }
    if(this.walls[2]){
    line(x+w,y+w,x,y+w );
    }
    if(this.walls[3]){
    line(x,y+w,x,y);

    }
    
    if(this.visited){
      noStroke();
      fill(255,0,255,100);
      rect(x,y,w,w);
    }
    }
  
  index(i,j,rows,cols){
    if(i<0||j<0||i>cols-1||j>rows-1) return -1;
    return i +j*cols;
  }
  
  
  highlight(){
    let x = this.i*w;
    let y = this.j*w;
    noStroke();
    fill(0,0,255,100);
    rect(x,y,w,w);
  }
  
  checkNeighbors(grid,rows,cols){
    // console.log(this.index(this.i+1,this.j,cols));
    let neighbors = [];
    let top = grid[this.index(this.i,this.j-1,rows,cols)];
    let right = grid[this.index(this.i+1,this.j,rows,cols)];
    let bottom = grid[this.index(this.i,this.j+1,rows,cols)];
    let left = grid[this.index(this.i-1,this.j,rows,cols)];
    // console.log(top,left,right,bottom);
    
    if(top && !top.visited){
      neighbors.push(top);
    }
            if(right &&!right.visited){
      neighbors.push(right);
    }
        if(bottom && !bottom.visited){
      neighbors.push(bottom);
    }
        if(left && !left.visited){
      neighbors.push(left);
    }

    if(neighbors.length>0){
      let r = floor(random(0,neighbors.length));
      return neighbors[r];
    }
  }
}