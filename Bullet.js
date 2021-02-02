class Bullet{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,30,10);
        this.width = 30;
        this.height = 10;
        this.image = loadImage("fire.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}