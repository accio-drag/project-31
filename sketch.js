const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var divisions = [];
var divheight = 300
var plinkos = [];
var particles = [];

function setup() {
  
  createCanvas(400,800);
 
  engine = Engine.create();
  world = engine.world;
ground = new Ground(width/2,height,width,20)
for ( var i = 0;i<=width; i+=50 ){
divisions.push(new Division(i,height-divheight/2,10,divheight))

}
for (var j = 50; j<= width-20;j+=50){
  plinkos.push(new Plinko(j,75))
  }
for (var j = 50; j<= width-20;j+=50){
  plinkos.push(new Plinko(j,175))
  }
  for (var j = 50; j<= width-20;j+=50){
    plinkos.push(new Plinko(j,275))
    }
    for (var j = 50; j<= width-20;j+=50){
      plinkos.push(new Plinko(j,375))
      }


}

function draw() {
  background(0,0,0);  
  ground.display();
  Engine.update(engine)
  for(var i = 0; i<divisions.length;i++){
divisions[i].display()



  }
  if(frameCount%60===0){
particles.push(new Particle(random(50,350),10))
  }
  for(var i = 0; i<particles.length;i++){
    particles[i].display()
  }
  for(var i = 0; i<plinkos.length;i++){
    plinkos[i].display()
    
    
    
      }
    
}