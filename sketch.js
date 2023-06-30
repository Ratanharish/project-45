var player_running,player_standing
var thief
var rocks,helicopter,jungle,bullet
var tiger_sitting,tiger_running
var bridge
var backgroundS
var playButton
var gameState=PLAY
var gameState=END
var score=0
var PLAY=1
var END=2
var invisibleG
var player

function preload(){
 playerRunning= loadImage("assets/running_archeologist.png")
 playerStanding= loadImage("assets/standing_archeologist.png")

 tigerSitting= loadImage("assets/tiger_sitting.png")
 tigerRunning=loadImage("assets/tiger_running.png")

 stealer=loadImage("assets/robber.png")
 bullet=loadImage("assets/bullet.png")

 rocksI=loadImage("assets/rocks.png")
 helicopter=loadImage("assets/helicopter.png")
 backgroundS=loadImage("assets/jungle1.png")
 bridge=loadImage("assets/bridge.png")
 playB=loadImage("assets/play_button.png")
}


function setup() {
  createCanvas(1400,650);

 background1=createSprite(700,325,1400,650)
 background1.addImage(backgroundS)
 background1.x=background1.width/2

  player=createSprite(800, 300 );
  player.addImage("running",playerRunning)
  player.scale= 0.6

  thief=createSprite(200,500)
  thief.addImage(stealer)
  thief.scale= 0.5

  playButton=createSprite(1200,120)
  playButton.addImage(playB)
  playButton.scale=0.3

invisibleG=createSprite(500,740,2000,10)
invisibleG.visible = true

 rocksGroup= new Group()

}

function draw() {
  
 background(0)
if (gameState== PLAY){
  score=score+Math.round(getFrameRate()/60)
  SpawnRocks()

}

  if(mousePressedOver(playButton)){
    gameState=PLAY
    background1.velocityX=-2
    playButton.remove()
  
  }
  if(background1.x<0){
    background1.x=background1.width/2

  } 
  if(keyDown("space")){
    player.velocityY=-16
  }
  if(rocksGroup.isTouching(player)){
     gameState=END
     Gameover()
  }
  

  player.velocityY=player.velocityY+0.8
  player.collide(invisibleG)
 
  drawSprites();
  textSize(50)
  text("Score:"+score,100,120)
  
  
}
function SpawnRocks(){
  if (frameCount% 350===0){
    rocks=createSprite(1200,600)
    rocks.addImage(rocksI)
    rocks.scale=0.3
    rocks.velocityX=-3
    rocks.lifetime=800
    
    rocksGroup.add(rocks)
  }
}
function Gameover(){
   swal({
    title: `Game Over`,
    text: "Oh no, you lost the artifact....!!!",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
    imageSize: "100x100",
    confirmButtonText: "Thanks For Playing"
  });
}