var garden;
var rabbit;
var gardenImg;
var rabbitImg;
var appleImg;
var orangeLeafImg;
var leafImg;
var apple;
var orangeLeaf;
var leaf;
var leftBoundary;
var rightBoundary;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

apple = createSprite(350, 340, 20, 20);
apple.addImage(appleImg);
apple.scale = 0.09;

orangeLeaf = createSprite(270, 340, 20, 20);
orangeLeaf.addImage(orangeLeafImg);
orangeLeaf.scale = 0.10;

leaf = createSprite(50, 340, 20, 20);
leaf.addImage(leafImg);
leaf.scale = 0.15;

leftBoundary = createSprite(0, 0, 100, 800);
leftBoundary.visible = false;
rightBoundary = createSprite(410, 0, 100, 800);
rightBoundary.visible = false;  
}


function draw() {
  background(0);
  ground.velocityY=5;
  boy.Y = world.mouse.Y;
  edges = createEdgeSprite();
  boy.collide(edges[3]);
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  


  drawSprites();
}