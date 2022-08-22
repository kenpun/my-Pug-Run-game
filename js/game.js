class Game {
    
    setup() {
        this.player = new Player()
        this.background = new Background()
        this.obstacles = [];
        this.barriers = [];
        textAlign(CENTER);
    }
    
    constructor() {
        this.backgroundImages
        this.puppyImage
        this.mushroomImage
    }
    
    preload() {
        this.backgroundImages = [
            { src: loadImage('assets/background/plx-1.png'), x: 0, speed: 0.5 },
            { src: loadImage('assets/background/plx-2.png'), x: 0, speed: 1 },
            { src: loadImage('assets/background/plx-3.png'), x: 0, speed: 2 }
        ]
        this.playerImage = loadImage('assets/player/pixel-pug-dog.gif')
        this.puppyImage = loadImage('assets/obstacle/pixel-pug-dog.gif')
        this.mushroomImage = loadImage('assets/obstacle/pixel-mushroom.gif') 
    }


    draw() {
        // console.log('game drawing');
        clear()
        this.background.draw()
        this.player.draw()
        // here we add obstacles array
        // frameCount - this is provided by p5 determining the spacing between
        // obstacles
        if (frameCount % 200 === 0) {
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
        

        if (frameCount % 60 === 0) {
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

        // status bar
        fill(255); 
        textSize(20);
        text('score:', 50, 35);
        text(game.player.score, 100, 35);

    }
}