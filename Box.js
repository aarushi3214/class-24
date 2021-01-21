class Box{
    constructor(x,y,width,height){
    var options={
        restitution:0.8,
        friction:1.0,
        density:1.0 
    }    
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }

    //display for displaying shape over the engine body
    display(){
       //create a shape & store in a var engine body position
       var pos=this.body.position;
       //capture engine body angle
       var angle=this.body.angle;
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    stroke("orange");
    strokeWeight(4);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop();
    }
   };