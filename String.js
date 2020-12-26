class String{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.string = Constraint.create(options);
        World.add(world,this.string);
    }
    display(){
        var pointA = this.string.bodyA.position;
        var bodyB = this.string.bodyB.position;
        var pointC = bodyB.x + this.offsetX;
        var pointD = bodyB.y + this.offsetY;
        fill("white");
        line(pointA.x, pointA.y, pointC, pointD);
        
    }
}