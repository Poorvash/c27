class Chain{
    constructor(BodyA,BodyB)
    {
        var option={
            bodyA:BodyA,
            bodyB:BodyB,
            stiffness:0.04,
            length:10
        }
        this.Chain=Constraint.create(option)
        World.add(world,this.Chain)
    }
    display(){
         var pointA = this.Chain.bodyA.position;
          var pointB = this.Chain.bodyB.position; 
          strokeWeight(4);
         line(pointA.x, pointA.y, pointB.x, pointB.y);
     }
    }