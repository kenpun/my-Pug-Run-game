class Game {

    constructor() {
        this.backgroundImages
        this.puppyImage
        this.peanutButterImage
        this.obstacle
    }
    
    preload() {
        this.backgroundImages = [
            { src: loadImage('assets/background/plx-1.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background/plx-2.png'), x: 0, speed: 1 },
            { src: loadImage('assets/background/plx-3.png'), x: 0, speed: 2 }
        ]
        this.arcadeFont = loadFont('assets/font/arcadefont.TTF')
        this.playerImage = loadImage('assets/player/resized-pug.gif')
        this.puppyImage = loadImage('assets/obstacle/resized-pug.gif')
        this.peanutButterImage = loadImage('assets/obstacle/peanut_butter.png')
    } // close preload
    
    setup() {
        this.player = new Player()
        this.background = new Background()
        this.collectables = [];
        this.obstacles = [];
        textFont(this.arcadeFont);
        this.playMode = true;
        this.backgroundSong = new Audio('assets/sound/fire-in-the-hole.mp3') 
        noFill();
        stroke(0)
        strokeWeight(15);
        rect(width/2, height/2, width, height)
    } // close setup
 
    draw() {
        clear()
        if (this.playMode){ // adds the pause and play effect
            this.backgroundSong.play()
            this.background.draw()
            this.player.draw()
            // here we add obstacles array
            // frameCount - this is provided by p5 determining the spacing between obstacles
            if (frameCount % 150 === 0) {
            this.collectables.push(new Collectable(this.puppyImage))
            }
            // iterate over the obstacles array and call the draw function for every obstacle inside
            this.collectables.forEach(function(collectable) {
            collectable.draw()
            })

            this.collectables = this.collectables.filter(collectable => {
                if (collectable.collision(this.player) || collectable.x < 0 - collectable.width) {
                    return false
                } else {
                    return true
                }
            })

            if (frameCount % 15 === 0) {
                this.obstacles.push(new Obstacle(this.peanutButterImage))
            }
            // iterate over the obstacles array and call the draw function for every obstacle inside
            this.obstacles.forEach(function(obstacle) {
                obstacle.draw()
            })

            this.obstacles = this.obstacles.filter(obstacle => {
                if (obstacle.collision(this.player) || obstacle.x < 0 - obstacle.width) {
                    return false
                } else {
                    return true
                }
            })


        } else { // here is the end of the playMode condition
            fill(106, 13, 173, 255);
            rect(0, 0, width, height);
            fill(255)
            textSize(40)
            text('GAME PAUSED', width / 2, height / 2)
            this.backgroundSong.pause()
        } // close pause state

        // score
        fill(255);
        textAlign(CENTER);
        textSize(20);
        text('SCORE: ', 90, 40);
        text(game.player.score, 170, 40);

        
    } // close draw

    

}// close Game class