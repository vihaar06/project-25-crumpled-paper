class Paper extends baseClass{
    constructor(){
    var options={
        isStatic=false,
        restitution=0.3,
        friction=0,
        density=1.2
    }
        this.x=x;
		this.y=y;
		
		this.body=Bodies.rectangle(x, y,options);
 		World.add(world, this.body);
    this.image=loadImage("paper.png");
    
}


}