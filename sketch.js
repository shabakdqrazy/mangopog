
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,30);
	mango2=new Mango(950,150,30);
	mango3=new Mango(1000,250,30);
	mango4=new Mango(1100,200,30);
	mango5=new Mango(1200,170,30);
	mango6=new Mango(1000,125,30);

	stone = new Stone(200,480,50)

	slingshot=new SlingShot(stone.body,{x:140,y:420})

	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
	
	Engine.run(engine);

	detecollision(stone,mango1)
	detecollision(stone,mango2)
	detecollision(stone,mango3)
	detecollision(stone,mango4)
	detecollision(stone,mango5)
	detecollision(stone,mango6)

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,100,340,200,300);
  
  stone.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

slingshot.display();

  


  groundObject.display();
}


function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
 }

 function mouseReleased(){
	slingshot.fly();
 }

 
 function detecollision(lstone,lmango){
	 mangoBodyPosition=lmango.body.position
	 stoneBodyPosition=lstone.body.position
	 
	 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
        if(distance<=lmango.r+lstone.r)
		{
			Matter.Body.setStatic(lmango.body,false);
			
		}
	}
