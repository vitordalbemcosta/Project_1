class Weapon() {
    constructor(game, x, y, width, height) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.canvas;
    }
    
    
    /* crashWith eu quero que tenha impacto
    com a arma e tambem o impacto do obstaculo
    com o o final da tela na esquerda */



    draw() {
        this.img.src = '';
        this.game.ctx.drawImage(this.img, this.x, this y, this.width, this.height);
    }
}




/* nesta classe vou criar a imagem da arminha
dentro desta classe vou ter que fazer o draw dela,
tenho que descobrir como fazer a arminha atirar e que esse tiro
tenha colisao com o obtaculo */
