class Roof{
    constructor(x,y,w,h){
        var options ={
            friction:0.5,
            density:2,
            isStatic: true

        }
        this.w = w
        this.h= h
      this.roof=Bodies.rectangle(x,y,w,h,options)  
      World.add(world,this.roof)
    
    }
    display(){
        fill(255,0,255)
        rect(this.roof.position.x,this.roof.position.y,this.w,this.h)

    }
} 