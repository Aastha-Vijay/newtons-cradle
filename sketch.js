
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, string1, string2, string3, string4, string5;

var bob1, bob2, bob3, bob4, bob5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;
 
	roof = new Roof(600,50,850,30);
	bob1 = new Bob(390,650,100);
	bob2 = new Bob(490,650,100);
	bob3 = new Bob(590,650,100);
	bob4 = new Bob(690,650,100);
	bob5 = new Bob(790,650,100);
	string1 = new String(bob1.body, roof.body, -210, 0);
	string2 = new String(bob2.body, roof.body, -110, 0);
	string3 = new String(bob3.body, roof.body, -10, 0);
	string4 = new String(bob4.body, roof.body, 90, 0);
	string5 = new String(bob5.body, roof.body, 190, 0);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");


 keyPressed();

  drawSprites();
 
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();


}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
	Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-3100, y:-550});
	}
}

