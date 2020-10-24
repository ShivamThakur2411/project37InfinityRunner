var pikachu, pikachu_running, pikachu_collided;
var ground, invisibleGround, groundImage;
var cloudsGroup, cloudImage;
var song,song3;
var camera;

function preload(){
  pikachu_running = loadAnimation("Pikachu1.png","Pikachu3.png","Pikachu2.png");

  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("Cloud.png");

  song = loadSound("jump.mp3");
  song3 = loadSound("checkPoint.mp3");
}

function setup() {
  createCanvas(600, 200);
  
  pikachu = createSprite(50,180,20,50);
  pikachu.addAnimation("running", pikachu_running);
  pikachu.scale = 0.1;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = 0;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudsGroup = new Group();
  obstaclesGroup = new Group();

  score = 0;
}

function draw() {
  background(255);
  
    camera.position.x = pikachu.x;
   text("Score: "+ score, 500,50);

    score = score + Math.round(getFrameRate()/60);
     if(keyDown("space")&&pikachu.y>=161) {
    pikachu.velocityY = -13;
       song.play();
  }
     pikachu.velocityY = pikachu.velocityY + 0.8;
    
    spawnClouds();

 pikachu.collide(invisibleGround);
  drawSprites();
}

function spawnClouds() {
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    cloud.lifetime = 400;
    cloud.depth = pikachu.depth;
    pikachu.depth = pikachu.depth + 1;
    cloudsGroup.add(cloud);
  } 
}