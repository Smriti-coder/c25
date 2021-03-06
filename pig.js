class Pig{
    constructor(x,y){
        
        var options = {
            restitution:0.8,
            density:1,
            friction:0.5 

        }
         
        this.body = Bodies.rectangle(x,y,50, 50,options);
        this.width= 50;
        this.height= 50;
        World.add(world,this.body);
    }

    display(){
     
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        rotate(angle);
        translate(pos.x,pos.y)
        fill("green");
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
    }
}