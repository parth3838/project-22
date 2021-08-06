const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
	
   ball = new Ball(120,300,15);

   ground = new Ground(500,370,1000,20);

   leftSide = new Dustbin(750,300,20,120);
   rightSide = new Dustbin(900,300,20,120);
	
   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
 
  ground.show();

  ball.show();

  leftSide.show();
  rightSide.show();

  
  drawSprites();
  
  
}

function keyPressed() {
if(keyCode === UP_ARROW) {
  Matter.Body.applyForce(ball.body,ball.body.position, {x:40,y:-40})
}
	
}

