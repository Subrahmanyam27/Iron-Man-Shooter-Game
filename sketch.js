const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var bullet1;

function preload(){
	ironman1 = loadImage("Iron Man.png");
}

function setup() {
	createCanvas(1200,600);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,580);
	enemy1 = new Ultron(800,100);
	enemy2 = new WinterSoldier(600,300);
  enemy3 = new Thanos(1050,300);

  bullet1 = new Bullet(300,500);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  enemy1.display();
  enemy2.display();
  enemy3.display();
  bullet1.display();

  

  if(keyWentDown("space")){
    bullet2 = new BulletObj(bullet1.body,{x:310,y:500});
    bullet2.fly();
  }

  imageMode(CENTER);
  image(ironman1,200,370,400,400);


  drawSprites();
}	