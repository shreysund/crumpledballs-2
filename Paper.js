class Paper{
    constructor(x,y,radius){
        var options={
            'isStatic':false,
           'restitution':0.5,
            'density':1.2
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.image=loadImage("paperImage.png")
     World.add(world, this.body);
    
}
   display(){
       ellipseMode(RADIUS)
        fill("white")
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,100,100)
  }
}