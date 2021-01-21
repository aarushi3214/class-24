class Bird{
    constructor(x,y){
    var options={
        restitution:0.5,
        friction:1.0,
        density:1.5 
    }    
    this.body=Bodies.rectangle(x,y,50,50,options);
    this.width=50;
    this.height=50;
    World.add(world,this.body);
    }

    //display for displaying shape over the engine body
    display(){
       //create a shape & store in a var engine body position
       var pos=this.body.position;
       pos.x=mouseX;
       pos.y=mouseY;
       //capture engine body angle
       var angle=this.body.angle;
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    stroke("red");
    strokeWeight(4);
    fill("red");
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop();
    }
   };