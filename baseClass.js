class BaseClass{
  constructor(x,y,width,height,angle){
var options={
  "restitution":0.1,
  "friction":1,
  "density":1.2
}
this.body=Bodies.rectangle(x,y,width,height,options)
this.width = width
this.height = height

World.add(world,this.body)
  }
display(){
  var pos = this.body.position;
var angle = this.body.angle
push ();
translate (pos.x,pos.y)
rotate(angle)
ellipseMode(CENTER);
    fill("white")
    ellipse(100,100,1,1);
imageMode (CENTER)
image(this.image,100,100,70,70)
pop()
}

}