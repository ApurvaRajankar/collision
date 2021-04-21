function setup() {
  createCanvas(800,400);
  apurva=createSprite(400, 200, 50, 50);
  vrunda=createSprite(200, 200, 50, 50);
  apurva.shapeColor="blue";
  vrunda.shapeColor="violet";
}

function draw() {
  background(255,255,255);  
  vrunda.x=mouseX;
  vrunda.y=mouseY;

  if(vrunda.x -apurva.x<apurva.width/2 + vrunda.width/2
    &&apurva.x-vrunda.x<apurva.width/2 + vrunda.width/2
    &&vrunda.y -apurva.y<apurva.height/2 + vrunda.height/2
    &&apurva.y-vrunda.y<apurva.height/2 + vrunda.height/2
   ) {
     apurva.shapeColor="black";
     vrunda.shapeColor="yellow";
   }
  else{
    apurva.shapeColor="blue";
    vrunda.shapeColor="violet";
  }

  drawSprites();
}