var wall,thickness;
var bullet,speed,weight;

function setup() {

  createCanvas(1600,400);

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);

  thixkness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  
  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor=color(225);
  
}

function draw() {
  background(255,255,255); 
  
  

  drawSprites();
}

function hasCollided (lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true 
  }
    return false;
}
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/(Thickness of Wall * Thickness of Wall * Thickness of Wall);
  if (damage>10)
  {
    wall.shapeColor=(255,0,0);

  }  
 if (damage<10)
 {
  wall.shapeColor=(0,255,0);
 }

 





















}















}


