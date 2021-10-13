class Bob{
    constructor(x,y,r){
        var options ={
            restitution:1,
            friction:0.5,
            density:2

        }
        this.r = r
      this.bob1=Bodies.circle(x,y,r,options)  
      World.add(world,this.bob1)
      
    }
    display(){
        fill(255,0,255)
        ellipse(this.bob1.position.x,this.bob1.position.y,this.r,this.r)
        
    }
} 