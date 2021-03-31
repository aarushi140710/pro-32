const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ball, ground;
var stand1, stand2;
var slingShot;
var polygon_img;
var score=0;
var bg1 = "light bg.jpg";
var bg2 = "dark bg.jpg";
var bg;
var backgroundImg;

function preload(){
  getBackgroundImg();
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
  ground = new Ground();

  //bg01 = createSprite(200,200,10,10);
  //bg = createSprite(200,200,10,10);

  stand1 = new Stand(380,250,270,10);
  stand2 = new Stand(700,200,200,10);

  //set-1
  //level-1
  block1 = new Block(280,275,30,40);
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  block8 = new Block(490,275,30,40);

  //level-2
  block9 = new Block(310,235,30,40);
  block10 = new Block(340,235,30,40);
  block11 = new Block(370,235,30,40);
  block12 = new Block(400,235,30,40);
  block13 = new Block(430,235,30,40);
  block14 = new Block(460,235,30,40);

  //level-3
  block15 = new Block(340,195,30,40);
  block16 = new Block(370,195,30,40);
  block17 = new Block(400,195,30,40);
  block18 = new Block(430,195,30,40);

  //level-4
  block19 = new Block(370,155,30,40);
  block20 = new Block(400,155,30,40);
  
  //level-5
  block21 = new Block(385,115,30,40)

  //set-2
  //level-1
  block1 = new Block(640,175,30,40);
  block2 = new Block(670,175,30,40);
  block3 = new Block(700,175,30,40);
  block4 = new Block(730,175,30,40);
  block5 = new Block(760,175,30,40);

  //level-2
  block6 = new Block(670,135,30,40);
  block7 = new Block(700,135,30,40);
  block8 = new Block(730,135,30,40);

  //level-3
  block9 = new Block(700,95,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:200,y:200});
  //drawSprites();
}

function draw() {
  if(backgroundImg)
        background(backgroundImg);

    noStroke();
    textSize(35);
    fill("orange");
    text("Score : " + score, width-300, 50);

  Engine.update(engine);
  
  strokeWeight(2);
  stroke(15);

  stand1.display();
  stand2.display();

  stroke(15);
  fill("white");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  stroke(15);
  fill("orange");
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  stroke(15);
  fill("violet");
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  
  stroke(15);
  fill("green");
  block19.display();
  block20.display();
  
  stroke(15);
  fill("blue");
  block21.display();

  stroke(15);
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  stroke(15);
  fill("yellow");
  block6.display();
  block7.display();
  block8.display();

  stroke(15);
  fill("pink");
  block9.display();

  stroke(15);
  fill(255,99,71);
  textSize(25);
  text("Drag the line and release to hit the crazy boxes.",150,380);

  ellipse(ball.position.x,ball.position.y,20);
  slingShot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.ball);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://wprldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=18){
        bg(bg1);
    }
    else{
        bg(bg2);
    }
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}