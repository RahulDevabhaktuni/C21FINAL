var bullet;
var wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  
  speed = random(1, 321)
  weight = random(30, 52)
  thickness=random(22, 83)
  bullet = createSprite(15, 200, 30, 10)
  bullet.velocityX = speed
  bullet.shapeColor = "white";
  wall = createSprite (1200, 200, thickness, height/2)
  wall.shapeColor = "white"
}

function draw() {
  background("black");  
  if (hasCollided(bullet, wall)){
    
    bullet.velocityX = 0
    
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)  
    console.log(0.5*weight*speed*speed)
    console.log(damage)
    console.log(thickness*thickness*thickness)
    if (damage > 10){
      wall.shapeColor = "red"
    }
    if (damage < 10){
      wall.shapeColor = "green"
    }
  }
  drawSprites();
  
}
function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}