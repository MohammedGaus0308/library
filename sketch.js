var fixR,movingR;
var box1,box2,box3,box4;
function setup() {
  createCanvas(1000,400);
 fixR= createSprite(400, 300, 50, 50);
 fixR.shapeColor="red";
 movingR= createSprite(500,300,40,40);
 movingR.shapeColor="blue";
 box1=createSprite(100,200,30,30);
 box1.shapeColor="yellow";
 box1.velocityX=1;
 box2=createSprite(700,200,30,30);
 box2.shapeColor="green";
 box2.velocityX=-1;
 box3=createSprite(900,100,20,20)
 box3.shapeColor="pink";
 box3.velocityY=1;
box4=createSprite(900,300,20,20);
box4.shapeColor="orange";
box4.velocityY=-1
}

function draw() {
  background("black");  
  movingR.x=mouseX;
  movingR.y=mouseY;

  console.log(fixR.x - movingR.x);
  
  if(isTouching(movingR,fixR)){
    movingR.shapeColor="purple";
    fixR.shapeColor="purple";
  }
  else{
    movingR.shapeColor="blue";
    fixR.shapeColor="red";
  }
bounceOff(box1,box2);
bounceOff(box3,box4);
  drawSprites();
}
