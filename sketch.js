var boy;
var path;
var leftBoundry
var rightBoundry
var pathImage, boyImage

function preload(){
  //pre-load images
pathImage = loadImage("path.png")
boyImage = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  //create canvas
  createCanvas(500,400);
  
 //create boy sprites
  boy = createSprite(180,340,30,30)
boy.addAnimation("jackRunning", boyImage)
boy.scale = 0.08

//create path sprites for moving path
path = createSprite(200,200)
path.addImage(pathImage)
path.velocityY = 4
path.scale = 1

//sprite for left boundry
leftBoundry = createSprite(0,0,100,800)
leftBoundry.visible = false

//sprite for right boundry
rightBoundry = createSprite(410,0,100,800)
rightBoundry.visible = false
}

function draw() {
  background(0);
path.velocity = 4
boy.x = World.mouseX

edges = createEdgeSprites()
boy.collide(edges[3])
boy.collide(leftBoundry)
boy.collide(rightBoundry)

//reset background
if (path.y>400)
{
  path.y = height/2
}
drawSprites();
}
