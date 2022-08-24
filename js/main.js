const game = new Game();

function preload() {
    game.preload()
}

function setup() {
    createCanvas(700, 700);
    game.setup()
}

function draw() {
    game.draw()
}

function keyPressed() {
    if (keyCode === 38) {
        // make the player jump
        game.player.jump()
    }

    if (keyCode === 82) {
        // game reset
        location.reload();
    }

    if (keyCode === 32){
        // pause and play game
        game.playMode = !game.playMode
    }

    if (keyCode === 39) {
        // move player right
        game.player.moveRight()
    }

    if (keyCode === 37) {
        // move player left
        game.player.moveLeft()
    }


}