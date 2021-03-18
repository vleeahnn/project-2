var canvas;
const sizeA= 40;
const sizeB= 5;

function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}
function setup () {
  canvas = createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
  canvas.position(0, 0);
  canvas.style('z-index', '-999');
  frameRate(10);
}
function draw () {
  noStroke();
  rect (random(width), random(height), random (sizeA), random (sizeA));
  fill (0, 72, 255, 100);
  rect (random(width), random(height), random (sizeA), random (sizeA));
  fill (0, 72, 255, random(255));
  ellipse (random(width), random(height), random (sizeA), random (sizeA));
  fill (0, 72, 255, random(255));
  rect (random(width), random(height), sizeB, sizeB);
  fill (0, 72, 255, random(255));
  ellipse (random(width), random(height), sizeB, sizeB);
}  