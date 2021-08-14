class player{
    

    constructor(x,y,w,h){
    
        var Options={
            isStatic:true,
            density:1.5
        }
        this.body=Bodies.rectangle(x,y,w,h,Options);
        this.w=w;
        this.h=h;
        World.add(world,this.body);
        this.image=loadImage("pp2.png");
    
    
    }
    
    
    display(){
     imageMode(CENTER);
     image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);
     
        
    }
    }