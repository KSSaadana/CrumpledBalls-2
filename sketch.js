const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,paperImg; 
var ground;
var dustbinwall1, dustbinwall2, dustbinwall3, dustbinwall4;
var lid
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper = new Paper(80,400);
   ground = new Ground(400,475);
 
   fill("green");
   dustbinwall3 = new DustbinWall(590,387,20,150);

  
   
	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  paper.display();
  ground.display();
  
  dustbinwall3.display();


  drawSprites();
 
}

function keyPressed(){

  

  if(keyCode === UP_ARROW ){
    Matter.Body.applyForce(paper.body, paper.body.position, {x:80,y:-150});
  
  
  }

}
