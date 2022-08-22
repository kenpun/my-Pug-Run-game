class Player {
    
    constructor() {
        // jumping true or false
        this.score = 0;
        this.gameOver = false
        this.velocity = 0
        this.gravity = 0.4 
        this.width = 200;
        this.height = 200;
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
        if (this.y == height - this.height) { // will only allow jumping when at the
            // the position of the player is at the bottom
            this.velocity = - 15
        }
         // possible to wrap this in an if condition and only
        // execute if player is not jumping.
        // once jump is pressed set this to true and set when to false when back
        // on the ground i.e. starting position
    }

    moveRight() {
        console.log('move right');
        if (this.x == width - this.width) {
            this.velocity =  5
        }
    }
}