const enemiesImages = [
    "../Images/baby1.png",
    "../Images/baby2.png",
    "../Images/baby3.png",
    "../Images/baby4.png",
    "../Images/baby5.png",
    "../Images/pregnan1.png",
    "../Images/pregnant2.png",
    "../Images/pregnan3.png",
    "../Images/pregnant4.png"
]

class Enemy {
    constructor(game, index) {
        this.index = index;
        this.game = game;
        this.x = game.canvasWidth;
        this.y = Math.floor(Math.random() * 800);
        this.width = 130;
        this.height = 100;
        this.image = new Image();
    }

    left() {
        return this.x;
    }

    right() {
        return this.x + this.width;
    }

    top() {
        return this.y;
    }

    bottom() {
        return this.y + this.height;
    }

    drawEnemy() {
        this.image.src = enemiesImages[this.index];
        this.game.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}
