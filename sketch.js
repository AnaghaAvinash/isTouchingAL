var rect1,movingRect;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400,200,50,50);
  movingRect = createSprite(450,300,10,90);
  rect1.shapeColor = "red";
  movingRect.shapeColor = "blue";


}

function draw() {
  background("black");  
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;
  if(((movingRect.x-rect1.x)<(movingRect.width/2+rect1.width/2 ))
  &&((rect1.x-movingRect.x)<(movingRect.width/2+rect1.width/2))
  &&((movingRect.y-rect1.y)<(movingRect.height/2+rect1.height/2))
  &&(rect1.y-movingRect.y)<(movingRect.height/2+rect1.height/2))
  {

    rect1.shapeColor="yellow";
    movingRect.shapeColor="yellow";

  }
  else{
    rect1.shapeColor = "red";
    movingRect.shapeColor = "blue";
  }



  drawSprites();

  
  
}