class Background {
    draw() {
        console.log('this is the background drawing')
        // image(game.backgroundImages[0].src, 0, 0, width, height)
        // image(game.backgroundImages[1].src, 0, 0, width, height)
        // image(game.backgroundImages[2].src, 0, 0, width, height)
        // this is now replaced by a loop
        game.backgroundImages.forEach(function (img) {
            img.x -= img.speed
            image(img.src, img.x, 0, width, height)
            // here we add a second image
            image(img.src, img.x + width, 0, width, height)
            //  if the first image is moved completely out of the screen
            //  on the left we want to place it where the second image initially was.
            if (img.x <= -width) {
                img.x = 0  
            }
        })
    }
}