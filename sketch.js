const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;




var world, engine,ground,ball


function setup() {
  engine= Engine.create();
  world= engine.world;
  createCanvas(800,400);

  var options={

    isStatic: true

  }
  ground= Bodies.rectangle(400,height,800,20,options);
  World.add(world,ground);

  var ball_option={
    restitution: 6.0

    
  }


  ball=Bodies.circle(400,200,20,ball_option)

  World.add(world,ball)

  console.log(ground);

  
  
  
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)



}



