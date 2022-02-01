class Shots {
    constructor(game, x, y, width, height) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 200;
        this.image = new Image();

    }

    fireShot() {
        this.x++;
    }
    draw() {
        this.img.src = '/Images/poop.png';
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}


/* fazer amanha !! */
/* nao faco ideia de como vou fazer o disparo...
disparo saindo da posicao que estiver minha weapon. */