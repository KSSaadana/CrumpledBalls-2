class Lid{
    constructor(x,y,width,height,angle){
    var options = {
        
        "restitution":0.1,
        "friction":1,
        "density":1.2
    }
    this.body = Bodies.rectangle(x,y,width,height,angle,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        
        rectMode(CENTER);
        fill("red")
        rect(100,100,this.width,this.height,angle);
        pop();
    }
    };
    