class Enemy{
    
    
    
constructor(x,y,w,h){

    var Options={
        isStatic:true,
        density:0.5,
        friction:1.5
    }
    this.body=Bodies.rectangle(x,y,w,h,Options)
    this.w=w;
    this.h=h;
    World.add(world,this.body);
    this.image1=loadImage("zombie1.png");
    this.image2=loadImage("zombie2.png");
    this.image3=loadImage("zombie3.png");
    this.image4=loadImage("zombie4.png");    
        

    }


 display(){
imageMode(CENTER);
var num=Math.round(random(1,4));
switch(num){
    case 1: image(this.image1,this.body.position.x,this.body.position.y,100,300);
    break;
    case 2: image(this.image2,this.body.position.x,this.body.position.y,100,300);
    break;
    case 3: image(this.image3,this.body.position.x,this.body.position.y,100,300);
    break;
    case 4: image(this.image4,this.body.position.x,this.body.position.y,100,300);
    break;
    default: break;}

   
          

    



    }
}

    
    
