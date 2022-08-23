const game = new Game();

function preload() {
    game.preload()
}

function setup() {
    createCanvas(600, 600)
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

    if (keyCode === 39) {
        //console.log('right arrow');
        game.player.moveRight()
    }

    if (keyCode === 37) {
        game.player.moveLeft()
    }

}

