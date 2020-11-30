const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops = [];
var maxDrops=100;

function preload(){
  
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);

    umbrella = new Umbrella(200,500);
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }

    }
    
}

function draw(){
    background("black")
    umbrella.display();
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY()
        
    }


    drawSprites();

    
}   

