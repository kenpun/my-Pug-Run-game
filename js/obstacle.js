class Obstacle {
    constructor(image) {
        this.velocity = 0
        this.gravity = 0.2
        this.image = image
        this.x = width // this 
        this.y = (Math.random() * height) / 2.5 // this determines the height at which the obstacle appears
        this.width = 80
        this.height = 60
    }

    collision(playerInfo) {
        // console.log('collision', playerInfo);
        // get the middle of the player
        const playerX = playerInfo.x + playerInfo.width / 2
        const playerY = playerInfo.y + playerInfo.height / 2
        // get the middle of the obstacle
        const obstacleX = this.x + this.width / 2
        const obstacleY = this.y + this.height / 2
        //  measure the distance between obstacle and player
        if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
            // this is not a collision
            return false
        } else {
            // 
            game.player.score += 10

            if (game.player.score == 50) {
                this.gameWon()
            }
            return true
        } 
    } // close collision

    draw() {
        this.x -= 10; // the speed at which they cross the screen horizontally

        this.velocity += this.gravity
        this.y += this.velocity
        // if obstacle moves lower than the bottom of the canvas we need to correct 
        // it's position
        if (this.y >= height - this.height) {
            // reset to it's starting position
            this.y = height - this.height;

        } // close draw

        image(this.image, this.x, this.y, this.width, this.height);
    }

    gameWon(){
        fill(0, 0, 0, 100);
        rect(0, 0, width, height)
        textAlign(CENTER)
        textSize(25)
        fill(255)
        text("That's enough puppies, Score = " + game.player.score, width / 2, height / 2 - 40)
        text("press 'r' to replay", width / 2, height / 2 + 20)
        noLoop()
    } // close game won 
}