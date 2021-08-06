class Ball
{
  constructor(x, y, radius) 
  {
    let options = {
      isStatic:false,
      'restitution':0.3,
      'friction':0.5,
      'density':1.2
    };
    
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    
    
    ellipseMode(RADIUS);
    stroke(255);
    fill("#f7005b");
    circle(pos.x, pos.y, this.radius);
    
  }
}