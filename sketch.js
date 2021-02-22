const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg,bgIMG
var laserBeamIMG,laserBeam
var laserBeam2,l
 var ground
 var Ball,BallIMG
 var coin,coinIMG
 var Wall1,Wall2,Wall3,Wall4,WAll5,WAll6,Wall7,WAll8,Wall9,Wall10;
 var Wall11,Wall12,Wall13,Wall14,Wall15,Wall16;
 var score,gameState
function preload(){
    laserBeamIMG = loadImage('Laser Beam.png');
    BallIMG = loadImage('Ball.png');
    bgIMG = loadImage('bgImage.jpg');
    coinIMG = loadImage('Coins.png');
}
function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(520,500);
  laserBeam = createSprite(112,186);
  laserBeam.addImage(laserBeamIMG);
  laserBeam.scale = 0.4;

  laserBeam2 = createSprite(430,186);
  laserBeam2.addImage(laserBeamIMG);
  laserBeam2.scale = 0.4;
  ground = new Ground(1500,500,3000,20);

  Ball = createSprite(100,120);
  Ball.addImage(BallIMG);
  Ball.scale = 0.1

  coin = createSprite(50,30)
  coin.addImage(coinIMG);
  coin.scale = 0.1
   
  
  }

function draw() {
  Engine.update(engine);

  background(0);
  noStroke();
  textSize(30)
  fill("white")
  if(gameState===1){
    score++
  }

  laserbeam()
  
  bg = createSprite(520,500);
  bg.addImage(bgIMG);
  bg.scale = 5.9
  bg.velocityX = -50;
  //ground.velocityY = 0
console.log(bg.x)
  if (bg.x < 0) {
    bg.x = bg.width/ 2;
    Wall1=createSprite(164,3,120,20);
Wall1.addImage = (laserBeamIMG)
Wall1.scale = 0.4;

Wall2=createSprite(396,241,120,20);
Wall2.addImage = (laserBeamIMG)
Wall2.scale = 0.4;

var Wall3=createSprite(16,260,20,120);
Wall3.addImage = (laserBeamIMG)
Wall3.scale = 0.4;

 Wall4=createSprite(161,68,20,160);
Wall4.addImage = (laserBeamIMG)
Wall4.scale = 0.4;

 Wall5=createSprite(206,211,20,120);
Wall5.addImage = (laserBeamIMG)
Wall5.scale = 0.4;

 Wall6=createSprite(171,72,90,30);
Wall6.addImage = (laserBeamIMG)
Wall6.scale = 0.4;

 Wall7=createSprite(204,212,10,150);
Wall7.addImage = (laserBeamIMG)
Wall7.scale = 0.4;

 Wall8=createSprite(198,380,20,120);
Wall8.addImage = (laserBeamIMG)
Wall8.scale = 0.4;

//bgWall8.shapeColor='black';
 Wall9=createSprite(387,9,20,120);
Wall9.addImage = (laserBeamIMG)
Wall9.scale = 0.4;

 Wall10=createSprite(393,388,20,100);
Wall10.addImage = (laserBeamIMG)
Wall10.scale = 0.4;

 Wall11=createSprite(3,3,40,80);
Wall11.addImage = (laserBeamIMG)
Wall11.scale = 0.4;

Wall12=createSprite(339,142,180,20);
Wall12.addImage = (laserBeamIMG)
Wall12.scale = 0.4;

 Wall13=createSprite(12,126,30,40);
Wall13.addImage = (laserBeamIMG)
Wall13.scale = 0.4;

 Wall14=createSprite(216,278,120,20);
Wall14.addImage = (laserBeamIMG)
Wall14.scale = 0.4;

 Wall15=createSprite(217,356,150,30);
Wall15.addImage = (laserBeamIMG)
Wall15.scale = 0.4;

 Wall16=createSprite(393,292,150,20);
Wall16.addImage = (laserBeamIMG)
Wall16.scale = 0.4;


  }
 
  //createEdgeSprites();
  //Ball.bounceOff(edges);
  //Ball.bounceOff(Wall1);
  //Ball.bounceOff(Wall2);
 // Ball.bounceOff(Wall3);
  //Ball.bounceOff(Wall4);
  //Ball.bounceOff(Wall5);
  //Ball.bounceOff(Wall6);
  //Ball.bounceOff(Wall7);
 // Ball.bounceOff(Wall8);
  //Ball.bounceOff(Wall9);
  //Ball.bounceOff(Wall10);
  //Ball.bounceOff(Wall11);
  //Ball.bounceOff(Wall12);
  //Ball.bounceOff(Wall13);
  //Ball.bounceOff(Wall14);
  //Ball.bounceOff(Wall15);
  if(keyDown(UP_ARROW)){
  Ball.velocityX=0;
  Ball.velocityY=-5;
  }
  if(keyDown(LEFT_ARROW)){
    Ball.velocityX=-4;
    Ball.velocityY=0;
  }
  if(keyDown(DOWN_ARROW)){
    Ball.velocityX=0;
    Ball.velocityY=5;
  }
  if(keyDown(RIGHT_ARROW)){
    Ball.velocityX=7;
    Ball.velocityY=0;
  }
 
  drawSprites();
  laserBeam.display();
  laserBeam2.display();
  ground.display();
  Ball.display();
 //bg.display();
 coin.display()
  }
  function laserbeam() {
    if (frameCount % 20 === 0) {
      l = createSprite(1000, 200, 30, 30);
      //bgl.scale = 0.1;
      l.velocityX = -5;
      var r = Math.round(random(1, 4));
  
      switch (r) {
        case 1:
          console.log('1 added');
          laserBeam.addImage(laserBeamIMG);
          break;
        case 2:
          console.log('2 added');
          laserBeam2.addImage(laserBeamIMG);
          break;
        
      }
    }
  }
