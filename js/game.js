class Game {

    setup() {
        this.player = new Player()
        this.background = new Background()
        this.obstacles = [];
        this.barriers = [];
        textFont(this.arcadeFont);
        let playing = true;
    }

    constructor() {
        this.backgroundImages
        this.puppyImage
        this.mushroomImage
        this.backgroundSong
        this.arcadeFont
    }

    preload() {
        this.backgroundImages = [
            { src: loadImage('assets/background/plx-1.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background/plx-2.png'), x: 0, speed: 1 },
            { src: loadImage('assets/background/plx-3.png'), x: 0, speed: 2 }
        ]
        this.playerImage = loadImage('assets/player/pixel-pug-dog.gif')
        this.puppyImage = loadImage('assets/obstacle/pixel-pug-dog.gif')
        this.mushroomImage = loadImage('assets/obstacle/peanut_butter.png')
        this.backgroundSong = new Audio('assets/sound/fire-in-the-hole.mp3')
        this.gameOverSong = new Audio('assets/sound/game-over.mp3')
        this.arcadeFont = loadFont('assets/font/arcadefont.TTF')
    }

    draw() {
        // console.log('game drawing');
    
        clear()

        this.background.draw()
        //this.backgroundSong.play()
        //this.gameOverSong.play()
        this.player.draw()
        // here we add obstacles array
        // frameCount - this is provided by p5 determining the spacing between
        // obstacles
        if (frameCount % 100 === 0) {
            this.obstacles.push(new Obstacle(this.puppyImage))
            // console.log(this.obstacles);
        }
        // iterate over the obstacles array and call the draw function
        // for every obstacle inside
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


        if (frameCount % 100 === 0) {
            this.barriers.push(new Barrier(this.mushroomImage))
            // console.log(this.barriers);
        }
        // iterate over the barriers array and call the draw function
        // for every barrier inside
        this.barriers.forEach(function(barrier) {
            barrier.draw()
        })

        this.barriers = this.barriers.filter(barrier => {
            if (barrier.collision(this.player) || barrier.x < 0 - barrier.width) {
                return false
            } else {
                return true
            }
        })

        // score
        fill(255);
        textAlign(CENTER);
        textSize(20);
        //textFont('Georgia')
        text('SCORE: ', 100, 35);
        text(game.player.score, 200, 35);

        
    }



}