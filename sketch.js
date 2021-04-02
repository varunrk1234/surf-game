var canvas;

var level = 0
var database;

var  player, game;

var playerImage;

var gameState;

var obstacleGroup,obstacle1, obstacle1_img, obstacle2_img, obstacle3_img;

var background,background1_img,background2_img,background3_img,invisibleGround;
var restart,restart_img

function preload(){
  background1_img = loadImage("background2.jpg")
    obstacle1_img = loadImage("obstacle1.png")
    playerImage = loadAnimation("player.png")
    restart_img = loadImage("restart.png")   
}

function setup(){
  canvas = createCanvas(500,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  obstacleGroup = createGroup();
  background1 = createSprite (250,200,600,400)
  background1.addImage(background1_img)
    background1.velocityX = -4

  player = createSprite (100,280,20,50)
  player.addAnimation("surfing",playerImage)
  player.scale = 0.1

invisibleGround = createSprite(275,200,10,2)
invisibleGround.visible  = true

    }


function draw(){
console.log(gameState)
background(255)

edges = createEdgeSprites();

player.velocityY = player.velocityY  +0.8 
player.collide(edges)
if (background1.x < 250){
  background1.x = background1.width/2
  }
 if(gameState === 0){
    clear();

if(keyDown("space")&player.y > 200 ){
  player.velocityY = -5
}
  
//  if(player.y > 200 ){
//    console.log(player.y)
  
//   }

    game.play();
  }
 
else if(gameState === 1){
  player.velocityY = 0
  obstacleGroup.setVelocityXEach(0);
  obstacleGroup.setLifetimeEach(-1);
  background1.velocityX = 0
  restart = createSprite(250,200)
  restart.addImage(restart_img)
  if(mousePressedOver(restart)){
    gameState = 0
    }
}


  
player.collide(invisibleGround)
  drawSprites()


}

      
