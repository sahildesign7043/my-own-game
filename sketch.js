const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;



var world,engine;

var player1,player2;
var enemy1,enemy2,enemy3,enemy4;

var weapons,weapons2;
var ground;
var bullet,bullet2;







function setup(){
createCanvas(1200,600);
engine=Engine.create();
world=engine.world;

enemy1=new Enemy(1150,150,10,10);
enemy2=new Enemy(1150,450,10,10);
enemy3=new Enemy(800,150,10,10);
enemy4=new Enemy(800,450,10,10);
player1=new Player(50,150,100,260);
player2=new player(50,450,100,260);
weapons=new Weapons(90,120,50,50);
weapons2=new Weapons(90,450,50,50);

bullet=new Bullets(100,110,50,50);
bullet2=new Bullets(100,450,50,50);
slingShot1=new SlingShot(bullet.body,{x:100,y:120});
slingShot2=new SlingShot(bullet2.body,{x:90,y:450});







}
function draw(){
    background("red");
    Engine.update(engine);
    enemy1.display();
    enemy2.display();
    enemy3.display();
    enemy4.display();
    weapons.display();
    player1.display();
    player2.display();
    weapons2.display();
    bullet.display();
    bullet2.display();
    slingShot1.display();
    slingShot2.display();
   


}
function keyPressed(){
    if (keyCode===32){
        slingShot1.fly();
        Matter.Body.setPosition(bullet.body,{x:800,y:-30});
        slingShot2.fly();
        Matter.Body.setPosition(bullet2.body,{x:800,y:400});
    }
    if(keyCode === 37){
       slingShot1.attach(bullet.body);
       slingShot2.attach(bullet2.body);
       bullet2.trajectory=[];
       bullet.trajectory=[];
       Matter.Body.setPosition(bullet.body, {x:100, y:100});
       Matter.Body.setPosition(bullet2.body,{x:100,y:450});
    }
}