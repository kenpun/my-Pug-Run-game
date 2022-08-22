class Barrier {
    constructor(image) {
        this.image = image
        this.x = width // this 
        this.y = (Math.random() * height) / 2.5 // this determines the height at which the obstacle appears
        this.width = 50
        this.height = 50
    }

    draw() {
        this.x--
        image(this.image, this.x, this.y, this.width, this.height);
    }

}