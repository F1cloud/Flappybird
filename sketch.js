var PLAY = 1;
var END = 0;
var gameState = PLAY;

var flappyImage;
var block_1;
var block_2;
var block_3;
var block_4;
var block_5;
var edge;
var birdNumber = 1

var score = 0
var gameOverImg,restartImg
var jumpSound , checkPointSound, dieSound
var opening_img;
var ground_img;
var burger_img;
var fruits_img;
var juice_img;
var fries_img;
var pizza_img;
var bird_img;
var FrameCount = 0;

var Random = 0;


function preload(){
  
  jumpSound = loadSound("jump.mp3")
  dieSound = loadSound("die.mp3")
  checkPointSound = loadSound("checkPoint.mp3")
  gameOver_img = loadImage("gameOver.png")
  opening_img = loadImage("flappyOpening.png")
  ground_img = loadImage("ground.png")
  burger_img = loadImage("Burger.png")
  fruits_img = loadImage("Fruits.png")
  juice_img = loadImage("juice.png")
  fries_img = loadImage("Fries.png")
  pizza_img = loadImage("Pizza.png")

  flappyImage = loadImage('flappy.png');
  block1_img = loadImage("blk.png");
  block2_img = loadImage("blk 2.png");
  block3_img = loadImage("blk 3.png");
  block4_img = loadImage("blk 4.png");   
  block5_img = loadImage("blk 5.png"); 


}

function setup() {
  createCanvas(1400, 750);

  flappy = createSprite(250,250);
  flappy.addImage(flappyImage);
  flappy.scale = 0.5
  flappy.debug = true;
  flappy.setCollider("rectangle",0,0,100,100)

  Random = Math.round(random(1,5))
  console.log(Random)

  block_1Group = new Group()
  block_2Group = new Group()
  block_3Group = new Group()
  block_4Group = new Group()
  block_5Group = new Group()

  gameOver = createSprite(750,350)
  gameOver.addImage(gameOver_img);
  gameOver.visible = false;

  flappy_opening = createSprite(750,350)
  flappy_opening.addImage(opening_img);

  flappy_opening.visible = false;

  ground = createSprite(750,750)
  ground.addImage(ground_img);
  ground.visible = true;

  bird_img = createSprite(flappy.x,flappy.y)
  
  flappy_image()
  console.log(Random)
  edges = createEdgeSprites();
  
}

function draw() {
  
  background("black");
  //displaying score
  text("Score: "+ score, 500,50);
  //size(30);
  
  gameOver.depth = flappy_opening.depth+1
  //gameOver.depth = block_1.depth+1
  //gameOver.depth = block_2.depth+1
  //gameOver.depth = block_3.depth+1
  //gameOver.depth = block_4.depth+1
  //gameOver.depth = block_5.depth+1
  
  if(frameCount>0&&frameCount<100){
    flappy_opening.visible = true;
  }
  else{
    flappy_opening.visible = false;
  }

  bird_img.x = flappy.x+15
  bird_img.y = flappy.y-10

  if(gameState === PLAY){
    if(keyDown("space")){
      flappy.velocityY =-10  
      
    }
    flappy.velocityY += 0.7 
    
    createBlocks() 

    if(Random == 1){
      console.log("win")
       
      if(block_1Group.isTouching(flappy)){
        FrameCount = frameCount
        score = score+1
        console.log(FrameCount)
        if(frameCount>= FrameCount+50){
          Random = Math.round(random(1,5))
          flappy_image()
        }
         
      }
        if(flappy.isTouching(block_2Group)||flappy.isTouching(block_3Group)||flappy.isTouching(block_4Group)||flappy.isTouching(block_5Group)){
         gameState = END
       }
    }


    if(Random == 2){
      console.log("win")
       
      if(block_2Group.isTouching(flappy)){
        FrameCount = frameCount
        score = score+1
        console.log(FrameCount)
        if(frameCount>= FrameCount+50){
          Random = Math.round(random(1,5))
          flappy_image()
        } 
      }
        if(flappy.isTouching(block_1Group)||flappy.isTouching(block_3Group)||flappy.isTouching(block_4Group)||flappy.isTouching(block_5Group)){
         gameState = END
       }
    }

    if(Random == 3){
      //console.log("win")
       
      if(block_3Group.isTouching(flappy)){
        FrameCount = frameCount
        score = score+1
        console.log(FrameCount)
        if(frameCount>= FrameCount+50){
          Random = Math.round(random(1,5))
          flappy_image()
        }
      }
        if(flappy.isTouching(block_2Group)||flappy.isTouching(block_1Group)||flappy.isTouching(block_4Group)||flappy.isTouching(block_5Group)){
         gameState = END
       }
    }
    if(Random == 4){
      console.log()
       
      if(block_4Group.isTouching(flappy)){
        FrameCount = frameCount
        score = score+1
        console.log(FrameCount)
        if(frameCount>= FrameCount+10){
          Random = Math.round(random(1,5))
          flappy_image()
        }
      }
        if(flappy.isTouching(block_2Group)||flappy.isTouching(block_3Group)||flappy.isTouching(block_1Group)||flappy.isTouching(block_5Group)){
         gameState = END
       }
    }

    if(Random == 5){
      console.log("win")
       
      if(block_5Group.isTouching(flappy)){
        FrameCount = frameCount
        score = score+1
        console.log(FrameCount)
        if(frameCount>= FrameCount+50){
          Random = Math.round(random(1,5))
          flappy_image()
        }
      }
        if(flappy.isTouching(block_2Group)||flappy.isTouching(block_3Group)||flappy.isTouching(block_4Group)||flappy.isTouching(block_1Group)){
         gameState = END
       }
       if(flappy.isTouching(edges[3])){
        gameState = END
      }
        
    }


    
    //flappy.collide(edge);
    
    


  }
   else if (gameState === END) {
      flappy.velocityY = 0
      block_1Group.setVelocityXEach(0)
      block_2Group.setVelocityXEach(0)
      block_3Group.setVelocityXEach(0)
      block_4Group.setVelocityXEach(0)
      block_5Group.setVelocityXEach(0)
      gameOver.visible = true

   }
  
 
  
   //console.log(gameState)
  //createBlocks() 
  drawSprites();
  textSize(60);
  
  
  
}

function flappy_image(){
  
  switch(Random){
    case 1 : bird_img.addImage(pizza_img)
             bird_img.scale = 0.5
             break
    case 2 : bird_img.addImage(fruits_img)
             bird_img.scale = 0.4
             break
    case 3 : bird_img.addImage(fries_img)
             bird_img.scale = 0.3
             break
    case 4 : bird_img.addImage(burger_img)
             bird_img.scale = 0.4
             break
    case 5 : bird_img.addImage(juice_img)
            bird_img.sclae = 0.3
             break
  }
}







function createBlocks(){
  if(frameCount%100 == 0){
    list = [65,215,365,515,645]
    //block_1 = createSprite(1500,Math.round(random(list)))
    num = Math.round(random(1,5))
    block_1 = createSprite(1500,list[(num)%5])
    block_1.addImage(pizza_img)
    block_1.scale = 0.6;
    block_1.velocityX = -2
    gameOver.depth = block_1.depth + 1      
    block_1.debug = true
    block_1.setCollider("rectangle",0,0,100,100)
    block_1Group.add(block_1);
    


    //block_2 = createSprite(1500,Math.round(random(list)))
    block_2 = createSprite(1500,list[(num+1)%5])
    block_2.addImage(fruits_img)
    block_2.scale = 0.55;
    block_2.velocityX = -2
    gameOver.depth = block_2.depth + 1   
    block_2.debug = true
    block_2.setCollider("rectangle",0,0,100,100)
    block_2Group.add(block_2);

 
    //block_3 = createSprite(1500,Math.round(random(list)))
    block_3 = createSprite(1500,list[(num+2)%5])
    block_3.addImage(fries_img)
    block_3.scale = 0.4; 
    block_3.velocityX = -2
    gameOver.depth = block_3.depth + 1   
    block_3.debug = true
    block_3.setCollider("rectangle",0,0,100,100)
    block_3Group.add(block_3);


    //block_4 = createSprite(1500,Math.round(random(list)))
    block_4 = createSprite(1500,list[(num+3)%5])
    block_4.addImage(burger_img)
    block_4.scale = 0.4; 
    block_4.velocityX = -2
    gameOver.depth = block_4.depth + 1   
    block_4.debug = true
    block_4.setCollider("rectangle",0,0,100,100)
    block_4Group.add(block_4);

    //block_5 = createSprite(1500,Math.round(random(list)))
    block_5 = createSprite(1500,list[(num+4)%5])
    block_5.addImage(juice_img)
    block_5.scale = 0.55; 
    block_5.velocityX = -2
    gameOver.depth = block_5.depth + 1   
    block_5.debug = true
    block_5.setCollider("rectangle",0,0,100,100)
    block_5Group.add(block_5);

    

    //text(birdNumber,block_1.x,block_1.y)
    //text(birdNumber,block_2.x,block_2.y)
    //text(birdNumber,block_3.x,block_3.y)
    //text(birdNumber,block_4.x,block_4.y)
    //text(birdNumber,block_5.x,block_5.y)
  }
}