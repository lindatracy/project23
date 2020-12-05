var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2,660, width,10);
	groundSprite.shapeColor=color(255)

	box1sprite=createSprite(400,650,200,20);
	box1sprite.shapeColor="red"
	
	
	box2sprite=createSprite(300,610,20,100);
	box2sprite.shapeColor="red"

	
	box3sprite=createSprite(500,610,20,100);
	box3sprite.shapeColor="red"

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 660, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	box1=Bodies.rectangle(400,630,200,20 ,{isStatic:true});
	World.add(world,box1);
    //console.log(ground.area);
	
	box2=Bodies.rectangle(300,610,20,100, {isStatic:true});
	World.add(world,box2);

	box3=Bodies.rectangle(500,610,20,100, {isStatic:true});
	World.add(world,box3);
	//console.log(box3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
 

  fill("red"); 
 // rect(box1.position.x,box1.position.y,200,20);
  //rect(box2.position.x,box2.position.y,20,100);
 // rect(box3.position.x,box3.position.y,20,100);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Body.setStatic(packageBody,false);
    
  }
}



