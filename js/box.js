class Box {
    constructor(){
        this.x = 200;
        this.y = 375;
        this.width = 30;
        this.height = 70;
    }
    
    
    draw(){
        stroke(0);
        strokeWeight(5);
        fill(255, 120, 0);
        rect(this.x, this.y, this.width, this.height);
    }
        
}