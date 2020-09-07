var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, bottomSide, leftSide, rightSide, bottomBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	bottomSide = createSprite(400, 650, 200, 20)
	bottomSide.shapeColor = "red"
	leftSide = createSprite(300,620,20,100)
	leftSide.shapeColor = "red"
	rightSide = createSprite(500,620,20,100)
	rightSide.shapeColor = "red"
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	var options = {
		restitution : 1
	}
	helicopterSprite=createSprite(width/2, 200, 10,10,);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 bottomBody = Bodies.rectangle(400,650,200,20)
	 World.add(world,bottomBody)
	Engine.run(engine);
  
}


function draw() {
	

  rectMode(CENTER);
  background(0);
 
	
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}


function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false)
	
  }
}



