class Obstacle {
    constructor(image) {
        this.image = image
        this.x = width // this 
        this.y = (Math.random() * height) / 1.1 // this determines the height at which the obstacle appears
        this.width = 80;
        this.height = 80;
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
            game.player.score -= 10
            if (game.player.score == -10) {
                this.gameOver();
            } // game over condition is true
        } 
            return true
    } //close collision
    
    draw() {
        this.x -= 5; 
        image(this.image, this.x, this.y, this.width, this.height);
    }

    gameOver() {
        fill(0, 0, 0, 100);
        rect(0, 0, width, height)
        textAlign(CENTER)
        textSize(30)
        fill(255)
        text("Peanut Butter distracted you", width / 2, height / 2 - 40)
        text("press 'r' to replay", width / 2, height / 2 + 20)
        noLoop() // game is over, stop game
    }

}