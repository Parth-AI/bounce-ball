var ball,img,paddle;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=8;
  ball.velocityY = 1;
  //ball.velocityX=0;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  

}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  paddle.collide(edges);
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  ball.bounceOff(paddle);
  if(ball.bounceOff(paddle)){
     ball.velocityX = random(-8,12);
    ball.velocityY = random(1,3);
     }
  if(ball.x>400){
     ball.velocityX = random(8,12);
    ball.velocityY = random(1,3);
     }
  reset();
  drawSprites();
}

function reset(){
  if(ball.x>400){
    ball.x = 100;
    ball.y = random(100,300);
     }
}

