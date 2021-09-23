
var jaxon,track,path_running;

function preload(){
 path_running = loadAnimation("path-1.png", "path-2.png", "path-3.png");
 jaxon_running = loadAnimation("Runner-1.png","Runner-2.png",)
}

function setup(){
  createCanvas(300 ,800);
  path = createSprite(150,260,10,10)
  path.addAnimation("running",path_running)
  path.velocityY = 10
  path.y = height/2
  path.scale = 1.2

  jaxon = createSprite(160,660,10,10)
  jaxon.addAnimation("runner",jaxon_running)
  jaxon.scale = 0.1
  
}

function draw() {
  background(220);
  
  if (path.y > 500) {
   path.y = 300
  }
  jaxon.x = World.mouseX
  drawSprites()
}
