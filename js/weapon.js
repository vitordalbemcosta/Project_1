class Weapon {
    constructor(game, x, y, width, height) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.canvas;
    }

    draw() {
        this.img.src = './docs/assets/Images/gun.png';
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

