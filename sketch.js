
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground,ground_options,groundSprite;
var bin1, bin2, bin3, binSprite, binImage;
var binX, binY;

function preload()
{
	binImage = loadImage("dustBin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);

	ball = new Paper(100,550);

	ground = Bodies.rectangle(width/2, 600, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	groundSprite = createSprite(400, 600, 800, 50);
	groundSprite.shapeColor = "red";

	binX = 600;
	binY = 560;
	bin1 = new Bin(binX,binY,250,20);
	bin2 = new Bin(binX-115,binY-190,20,250);
	bin3 = new Bin(binX+115,binY-190,20,250);

	binSprite = createSprite(binX,binY-150);
	binSprite.addImage(binImage);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(170);

	groundSprite.x = ground.position.x;
	groundSprite.y = ground.position.y;

	ball.display();
	bin1.display();
	bin2.display();
	bin3.display();
  
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if (keyWentDown("UP_ARROW")){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:170,y:-370})
	}
}