class BulletObj{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.9,
            length: 10
        }
        this.pointB = pointB;
        this.bullet = Constraint.create(options);
        World.add(world, this.bullet);
    }

    attach(bodyA){
        this.bullet.bodyA = bodyA;
    }

    fly(){
        console.log("Work");
        //this.bullet.bodyA = null;
        //Matter.Body.applyForce(this.bullet.bodyA,this.bullet.position,{x:5,y:5});
        
    }

    display(){
        if(this.bullet.bodyA){
            var pointA = this.bullet.bodyA.position;
            var pointB = this.pointB; 
        }
    }
    
}