const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	ground=new Ground(700,550,1500,20);
	tree= new Tree(900,300,300,550);
	mango1=new Mango(900,100,30);
	mango2=new Mango(880,150,30);
	mango3=new Mango(850,250,30);
	mango4=new Mango(950,230,30);
	mango5=new Mango(930,170,30);
	mango6=new Mango(810,180,30);
	
	stone = new Stone(200,480,100)

	slingshot=new SlingShot(stone.body,{x:125,y:450})

	
	Engine.run(engine);

}

function draw() {

  background(230);
  
  imageMode(CENTER)
  image(boy ,200,480,200,300);
  stone.display();

  fill("brown")
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

slingshot.display();

  detecollision(stone,mango1)
  detecollision(stone,mango2)
  detecollision(stone,mango3)
  detecollision(stone,mango4)
  detecollision(stone,mango5)
  detecollision(stone,mango6)

  

 }

 function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
 }

 function mouseReleased(){
	slingShot.fly();
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
