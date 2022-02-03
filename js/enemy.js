const enemiesImages = [
    "./docs/assets/Images/baby1.png",
    "./docs/assets/Images/baby2.png",
    "./docs/assets/Images/baby3.png",
    "./docs/assets/Images/baby4.png",
    "./docs/assets/Images/baby5.png",
    "./docs/assets/Images/pregnan1.png",
    "./docs/assets/Images/pregnant2.png",
    "./docs/assets/Images/pregnan3.png",
    "./docs/assets/Images/pregnant4.png"
]

class Enemy {
    constructor(game, index) {
        this.index = index;
        this.game = game;
        this.x = game.canvasWidth;
        this.y = Math.floor(Math.random() * 700);
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
