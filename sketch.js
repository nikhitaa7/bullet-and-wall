
var bullet,speed,wall,weight,thickness;
function setup() {
  createCanvas(1600,400);
  speed=random(5,321);
 weight=random(30,52);

 thickness=random(22,83);
 bullet=createSprite(15,200,50,5);
 bullet.shapeColor="white";
 bullet.velocityX=speed;
 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor=color(80,80,80);
 
}

function draw() {
  if(hasCollided(bullet,wall)){
  background(0,0,0);  
 var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
 if(damage>10){
   wall.shapeColor="red";
 }
 else{
   wall.shapeColor="green";
 }
}
  drawSprites();
}

function hasCollided(bullet1,wall1){
bulletRightEdge=bullet1.x+bullet1.width;
wallLeftEdge=wall1.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;

}
else{
  return false;
}
}





