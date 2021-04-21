class Base{
    constructor(x,y,width,height,angle){
    
    var option = {
        restitution : 0.8,
        density : 0.3,
        friction : 1


    }

    
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/base.png")
    World.add(myWorld,this.body);
    }
    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        angleMode(RADIANS);
        //line number 22 only works for some systems and some systems don't even need the line
        //angleMode(DEGREES);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)
        pop();
    }
        
}