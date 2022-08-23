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
    if (keyCode === 32) {
        // make the player jump
        game.player.jump()
    }

    if (keyCode === 82) {
        console.log('reset');
        location.reload();
    }

}

