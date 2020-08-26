class Slingshot {
    constructor (A, B) {

    
    
    var options = {
        bodyA:A,
        pointB:B,stiffness:0.5,length:5
    }
    this.pointB=B;

    this.slingshot=Constraint.create(options);
    World.add(world,this.slingshot);


}

fly(){
    this.slingshot.bodyA=null;
}

display (){
    if (this.slingshot.bodyA){
    strokeWeight(5);
    line (this.slingshot.bodyA.position.x, this.slingshot.bodyA.position.y, this.pointB.x, this.pointB.y); 

    }
    
}
    
}