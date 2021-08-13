
var path,path_moving;
var runner,runner_moving;

function preload(){
  path=loadImage("path.png");
  runner_moving=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(350,600);
  
  path=createSprite(200,200);
  path.addImage(path);
  path.velocityY=4;
  path.scale=1.2;

  runner_moving=createSprite(200,100,20,50);
  runner_moving.scale=1.00;
  runner_moving.addAnimation("moving",runner_moving);

  runner_moving.velocityY=4;
}

function draw() {
  background(path);
   
  if (path.y>600){
    path.y=path.height/2;
  }

  drawSprites();
}
