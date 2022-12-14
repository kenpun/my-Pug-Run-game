class Collectable {
    constructor(image) {
        this.velocity = 0
        this.gravity = 0.2
        this.image = image
        this.x = width // this 
        this.y = (Math.random() * height) / 2.5 // this determines the height at which the collectable appears
        this.width = 80
        this.height = 60
    }

    draw() {
        this.x -= 10; // the speed at which they cross the screen horizontally
        this.velocity += this.gravity
        this.y += this.velocity
        // if collectable moves lower than the bottom of the canvas we need to correct 
        // it's position
        if (this.y >= height - this.height) {
            // reset to it's starting position
            this.y = height - this.height;
        }
        image(this.image, this.x, this.y, this.width, this.height);
    }// close draw

    collision(playerInfo) {
        // console.log('collision', playerInfo);
        // get the middle of the player
        const playerX = playerInfo.x + playerInfo.width / 2
        const playerY = playerInfo.y + playerInfo.height / 2
        // get the middle of the collectable
        const collectableX = this.x + this.width / 2
        const collectableY = this.y + this.height / 2
        //  measure the distance between collectable and player
        if (dist(collectableX, collectableY, playerX, playerY) > 25) {
            // this is not a collision
            return false
        } else {
            // 
            game.player.score += 10

            if (game.player.score == 100) {
                this.gameWon()
            }
            return true
        } 
    } // close collision

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