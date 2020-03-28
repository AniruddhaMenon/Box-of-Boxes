const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var boxA, ground;
var boxes = [];

var slider;
var val;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(100, 400, 800, 1);
  slider = createSlider(0, 7, 1);
  slider.position(20, 350);
 
}

function mousePressed(){
  boxA = new Box(mouseX, mouseY, 20, 20);
  boxes.push(boxA);
}

function draw(){
  background(0);
  val = slider.value();
  world.gravity.y = val;
  Engine.update(engine);
  for(var i = 0; i < boxes.length; i++){
    boxes[i].display();
  }
  ground.display();
}