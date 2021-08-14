class Bullets{
constructor(x,y,w,h){
var Options={
    isStatic:false,
    density:0.5,
    friction:1.5
     
}
this.body=Bodies.rectangle(x,y,w,h,Options);
this.w=w;
this.h=h;
this.image=loadImage("bb1.png");
this.smokeImage=loadImage("trajectory2.png");
this.trajectory=[];
World.add(world,this.body);

}
display(){
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);
    if( this.body.position.x > 100){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
      for(var i=0; i<this.trajectory.length; i++){
        circle(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1],20);
      }
}
}