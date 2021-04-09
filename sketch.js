var drift 
function preload(){
  driftimage= loadImage("images/drift.png")
  bgimage= loadImage ("images/background.jpg")
}
function setup() {
  createCanvas(400,400);
  drift = createSprite (50,295,20,20)
  drift.addImage("drift",driftimage)
  drift.scale=2
}

function draw() {

  background(bgimage);  

  drawSprites();
}