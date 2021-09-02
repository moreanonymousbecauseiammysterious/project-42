var score =0;
var gun,bluebubble, redbubble, bullet, backBoard, blast;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var redBubbleGroup, redBubbleGroup, bulletGroup;

var life = 3;
var scoreBoard = 0;
var gameState = 1;


function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 600);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  
  scoreBoard = createElement("h1");
  scoreBoard.html("Score: "+score);
  scoreBoard.style('color:black');
  scoreBoard.position(width-200,20);

  life = createElement("h1");
  life.html("Lives: "+life);
  life.style('color:black');
  life.position(width-800,20);
}

function draw() {
  background("#BDA297");

  //display Score and number of lifes

  if(gameState===1){
    gun.y=mouseY

    if(frameCount % 80 === 0){
      drawBlueBubble();
    }

    if(frameCount % 100 === 0){
      drawRedBubble();
    }

    if(keyDown("space")){
      shootBullets();
    }

    drawSprites();
  }
     
}

function shootBullets(){
  bullet = createSprite(gun.position.x,gun.position.y);
  bullet.addImage(bulletImg);
  bullet.scale = 0.2;
  bullet.velocityX = 12;
  bullet.lifetime = 800;
  bulletGroup.add(bullet);
}

function drawBlueBubble(){
  bluebubble = createSprite(800,random(20,580),40,40);
  bluebubble.addImage(blueBubbleImg);
  bluebubble.scale = 0.1;
  bluebubble.velocityX = -8;
  bluebubble.lifetime = 400;
  blueBubbleGroup.add(bluebubble);
}

function drawRedBubble(){
  redbubble = createSprite(800,random(20,580),40,40);
  redbubble.addImage(redBubbleImg);
  redbubble.scale = 0.1;
  redbubble.velocityX = -8;
  redbubble.lifetime = 400;
  redBubbleGroup.add(redbubble);
}

function handleBubbleCollision(bubbleGroup){
  if(life > 0){
    score=score+1;
  }
  if(redBubbleGroup.isTouching(bulletGroup)){
    bulletGroup.destroyEach();
    redBubbleGroup.destroyEach();
    score=score+1;
  }
  if(blueBubbleGroup.isTouching(bulletGroup)){
    bulletGroup.destroyEach();
    blueBUbbleGroup.destroyEach();
    score=score+1;
  }
}

function handleGameOver(bubbleGroup){

}