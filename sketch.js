var canvas;
const sizeA= 30;
const sizeB= 5;

function windowResize(){
 resizeCanvas(windowWidth, windowHeight);
}
function setup () {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  frameRate(3);
}
function draw () {
  noStroke();
  rect (random(width), random(height), random (sizeA), random (sizeA));
  fill (0, 72, 255);
  rect (random(width), random(height), random (sizeA), random (sizeA));
  fill (0, 72, 255);
  ellipse (random(width), random(height), random (sizeA), random (sizeA));
  fill (0, 72, 255);
  rect (random(width), random(height), sizeB, sizeB);
  fill (0, 72, 255);
  ellipse (random(width), random(height), sizeB, sizeB);
}  