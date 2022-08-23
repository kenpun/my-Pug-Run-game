class Obstacle {
    constructor(image) {
        this.velocity = 0
        this.gravity = 0.2
        this.image = image
        this.x = width // this 
        this.y = (Math.random() * height) / 2.5 // this determines the height at which the obstacle appears
        this.width = 120
        this.height = 120

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
            console.log(game.player.score);
            return true
        }
    }

    draw() {
        this.x--

        this.velocity += this.gravity
        this.y += this.velocity
        // if dog moves lower than the bottom of the canvas we need to correct 
        // it's position
        if (this.y >= height - this.height) {
            // reset to it's starting position
            this.y = height - this.height;

        }

        image(this.image, this.x, this.y, this.width, this.height);
    }
}