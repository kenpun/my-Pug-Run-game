class Barrier {
    constructor(image) {
        this.image = image
        this.x = width // this 
        this.y = (Math.random() * height) / 1.1 // this determines the height at which the obstacle appears
        this.width = 50
        this.height = 50
    }

    collision(playerInfo) {
        // console.log('collision', playerInfo);
        // get the middle of the player
        const playerX = playerInfo.x + playerInfo.width / 2
        const playerY = playerInfo.y + playerInfo.height / 2
        // get the middle of the obstacle
        const barrierX = this.x + this.width / 2
        const barrierY = this.y + this.height / 2
        //  measure the distance between obstacle and player
        if (dist(barrierX, barrierY, playerX, playerY) > 25) {
            // this is not a collision
            return false
        } else {
            // attempted game over condition
            game.player.score -= 10
            console.log(game.player.score);
            if (game.player.score == -50) {
                game.player.gameOver = true;
            
            } 
            return true
        }
    }

    draw() {
        this.x--
        image(this.image, this.x, this.y, this.width, this.height);
    }

}