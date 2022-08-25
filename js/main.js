const game = new Game();

function preload() {
    game.preload()
}

function setup() {
    mode = 0;
    createCanvas(900, 600);
    game.setup()
}

function windowResized() {
    resizeCanvas(900, 600)
}

function draw() {
    clear();
    if (mode == 0) {
        fill(106, 13, 173, 255);
        rect(0, 0, width, height);
        fill(255)
        textAlign(CENTER);
        textSize(30)
        text('Press ENTER to start', width / 2, height / 2) // start screen
    }
    if (mode == 1) {
    game.draw()
    }
}

function keyPressed() {
    if (keyCode === 13) {
        mode = 1;
    }
    
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

    if (keyCode === 40) {
        game.player.moveDown()
    }


}