class Player {
    
    constructor() {
        // jumping true or false
        this.score = 0;
        this.velocity = 0
        this.gravity = 0.2
        this.width = 100;
        this.height = 140;
        this.x = 0;
        this.y = height - this.height;
        
    }
    
    draw() {
        // this pushes the player down
        this.velocity += this.gravity
        this.y += this.velocity
        // if dog moves lower than the bottom of the canvas we need to correct 
        // it's position
        if (this.y >= height - this.height) {
            // reset to it's starting position
            this.y = height - this.height;

        }
        image(game.playerImage, this.x, this.y, this.width, this.height)
    }

    jump() {
        // console.log('jump');
        this.velocity = - 10 // possible to wrap this in an if condition and only
        // execute if player is not jumping.
        // once jump is pressed set this to true and set when to false when back
        // on the ground i.e. starting position
    }
}