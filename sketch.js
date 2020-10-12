
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage, ground, groundImage,
    monkeyImage;
var score;
var bananaGroup, obstacleGroup;
var survivalTime = 0; 


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(400, 400);
   monkey = createSprite(80, 315, 20, 20);
   monkey.addAnimation("running",monkey_running);
   monkey.scale = 0.1; 
  
  ground = createSprite(400, 350, 900, 10);

  console.log = (ground.x)
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  bananaGroup = new Group();
  obstacleGroup = new Group();
 
}
 

function draw() {
  background("pink");
  ground.velocityX= -4;
  if(ground.x < 0){
  ground.x= ground.width/2;
  }
  drawSprites();
  
 // background(220);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime, 100, 50);
  spawnObstacle();
  spawnBanana();
  
  if(keyDown("space")){
    monkey.velocityY= -12;
   }
  monkey.velocityY = monkey.velocityY + 0.5
  monkey.collide(ground);
  
  if(monkey.isTouching(obstacleGroup)){
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
  
    monkey.velocityY = 0; 
    survivalTime = 0;
    
  }
   if(monkey.isTouching(bananaGroup)){
    bananaGroup.setVelocityXEach(0);
    bananaGroup.destroyEach();
     
   }
}


function spawnObstacle(){
  if(frameCount % 300 ===0) {
  var obstacle = createSprite(400, 310, 90, 10 );
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.2
  obstacle.velocityX = -3; 
  obstacleGroup.add(obstacle);
    
  }
  
}
function spawnBanana(){
  if(frameCount % 80===0){
  var banana = createSprite(350, 150, 10, 10);
  banana.addImage(bananaImage);
  banana.scale = 0.1
  banana.velocityX = - 4; 
  bananaGroup.add(banana);
  }
}


