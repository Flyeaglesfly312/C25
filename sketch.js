const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld, ground;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
var bg;

function preload(){
  bg = loadImage("sprites/bg.png");
  
}
function setup() {
  createCanvas(1200,400);
  

  //creating my engine
  myEngine = Engine.create();
  
  //creating my world. My world, is my engines world
  myWorld = myEngine.world;
  
  ground1 = new Ground(600,height,1500,20);
  box1 = new Box(700,320);
  box2 = new Box(920,320);
  box3 = new Box(700,240);
  box4 = new Box(920,240);
  box5 = new Box(810,160);
  pig1 = new Pig(810,350);
  pig2 = new Pig(810,220);
  log1 = new Log(810,260,300, PI/2);
  log2 = new Log(810,180,300,PI/2);
  log3 = new Log(760,120,150,PI/7)
  log4 = new Log(870,120,150,-PI/7)
  bird = new Bird(30,370,50,50);
}
function draw() {
  background(bg); 

  
  Engine.update(myEngine);
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  bird.display();
  drawSprites();
}