var bg1, bg2 
var gamestate = 0; 
var spinning;
var groundimg, ground1, ground2,ground3, ground5, ground6, ground7, ground8,  ground9,  ground10,  ground11,  ground12,  ground13 ;
var avatar, avatar2, avatarIMG, avatar2IMG;
var player
var greeting;
var nameac;
var entrance;
var player;
var ground;

function preload() { 
    bg1 = loadImage("images/bgimg.png");
   avatarIMG = loadImage("images/character.png")
   bg1 = loadImage("images/background.jpg");
   avatar2IMG = loadImage("images/character2.png");
   groundimg = loadImage("images/ground.png")
}
function setup() {
  createCanvas(800, 800);
  entrance = createSprite(550,760,50,110) ;
  entrance.visible = false;
  spinning = createSprite(533,277, 100,11);
  spinning.rotationSpeed = 11;
  spinning.visible = false;
  player = createSprite(100,780,33,33);
  player.visible = false;
  var name = createInput();
  name.position(320,400) 
  var play = createButton("play");
  play.position(320,430); 
  avatar = createSprite(200,400,33,33);
  avatar.addImage("avatar1", avatarIMG);
  avatar.visible = false
  avatar.shapeColor = "green"
  avatar2= createSprite(500,400,33,33);
  avatar2.visible = false
  avatar2.addImage("character2", avatar2IMG);
  avatar2.shapeColor = "red"
 
  
  play.mousePressed(()=>{
      name.hide();
      play.hide();
      gamestate = 1;
      greeting = createElement('h2');
      greeting.html("Hello "+ name.value());
     greeting.position(400,400);
  })
}
function draw() {

  background(bg1);
  drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY);
  if (gamestate === 1 ){
  avatars();
  fill("black");
  textSize(23);
  textFont("georgia")
  fill("gold")
  text("CHOOSE YOUR AVATAR!", 250,200);
  }

 if(mousePressedOver(avatar)){
  gamestate = 2;
  player.addImage("c1", avatarIMG)
  player.scale = 1/4;
 }
 if(mousePressedOver(avatar2)){
  gamestate = 2;
  player.addImage("c1", avatar2IMG)
  player.scale = 1/4;
 }
 if (gamestate === 2 ){
   startGame();
   greeting.hide();
   move();
 }
 if(gamestate === 3){
  entrance.visible = false;
  
  play();
  move();
}
}

function avatars () { 
 
  avatar.visible = true ;
  avatar2.visible = true ;
  
}

function startGame (){ 
  avatar2.visible = false
  avatar.visible = false;
  player.visible = true;
  player.shapeColor = "green";
  entrance.visible = true;
  avatar.scale = 1.1;
  
  ground = createSprite(400,840, 800, 100);
  player.collide(ground);


   if (keyWentDown("UP_ARROW") && player.isTouching(entrance)){
     gamestate = 3
     player.x = 63;
     player.y = 153;
   }
  }

  function play(){

     ground1 = createSprite(100,200,199,33)
     ground1.addImage("imag", groundimg);
     player.collide(ground);
     player.collide(ground1);
  ground3 = createSprite(360, 202, 155, 33);
  ground3.addImage("imag", groundimg);
  ground4 = createSprite(690,202, 190, 33);
  ground4.addImage("imag", groundimg);
  ground5 = createSprite(100,400, 199,33);
  ground5.addImage("imag", groundimg);
  ground6 = createSprite(458,388,170,33);
  ground6.addImage("imag", groundimg);
  ground7 =createSprite(742,400, 155,33)
  ground7.addImage("imag", groundimg);
  ground8 = createSprite(301,554,88,33)
  ground8.addImage("imag", groundimg);
  ground9 = createSprite(209,695,33, 199)
  ground9.addImage("imag", groundimg);
  ground10 = createSprite(15,737, 33, 111);
  ground10.addImage("imag", groundimg);
  ground11 = createSprite(416,776,33,50);
  ground11.addImage("image", groundimg);
 
  ground12 = createSprite(491,746, 33, 100)
  ground12.addImage("imag", groundimg);
  ground13 = createSprite(555,746, 33, 200)
  ground13.addImage("imag", groundimg);
  spinning.visible = true;
  player.collide(ground3);
  player.collide(ground4);
  player.collide(ground5);
  player.collide(ground6);
  player.collide(ground7);
  player.collide(ground8);
  player.collide(ground9);
  player.collide(ground10);
  player.collide(ground11);
  player.collide(ground12);
  player.collide(ground13);
  //player.collide(ground)
 ground2 = createSprite(277,311,110, 33)
 ground2.addImage("imag", groundimg);
 player.collide(ground2)
 move();
  }
function move() {
    console.log("hey");
    if(keyIsDown(RIGHT_ARROW)){
      player.x = player.x + 11
   
     }
     if(keyIsDown(LEFT_ARROW)){
       player.x = player.x - 11
    
      }
      if(keyWentDown("space")){
       player.velocityY = -55
      }
      player.velocityY = player.velocityY +11
  }
  