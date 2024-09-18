function setup() {
    createCanvas(600, 600);
  }
  
    function draw() {
   background( black);
    stroke(blue);
    fill(red)
    
    if (mouseIsPressed){
      rect(mouseX, mouseY,20, 35);
    }
      
  }