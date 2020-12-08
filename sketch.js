const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = matter.Body;

var engine, world, bodies;
var paperObject,groundObject;

/*function preload()
{
	
}
*/
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(200,350,20);
	groundObject = new Ground(width/2,height,width,20);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("blue");
  //Engine.update(engine);
  paperObject.display();
  groundObject.display();
  drawSprites();
}