class Obstacles {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.width = 50;
        this.height = 50;
        this.img = new Image();
        this.babiesArray = [this.drawBabyOne(), this.drawBabyTwo(), this.drawBabyThree(), this.drawBabyFour(), this.drawBabyFive(), this.drawPregnantOne(), this.drawPregnantTwo(), this.drawPregnantThree(), this.drawPregnantFour()];
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
    drawBabyOne(x, y){
        this.img.src = '../Images/baby1.png';
        this.game.ctx.drawImage(this.img, x, y, this.width, this.height)
    }
    drawBabyTwo(x, y) {
        this.img.src = '../Images/baby2.png';
        this.game.ctx.drawImage(this.img, x, y, this.width, this.height)
    }
    drawBabyThree(x, y) {
        this.img.src = '../Images/baby3.png';
        this.game.ctx.drawImage(this.img, x, y, this.width, this.height)
    }
    drawBabyFour(x, y) {
        this.img.src = '../Images/baby4.png';
        this.game.ctx.drawImage(this.img, x, y, this.width, this.height)
    }
    drawBabyFive(x, y) {
        this.img.src = '../Images/baby5.png';
        this.game.ctx.drawImage(this.img, x, y, this.width, this.height)
    }
    drawPregnantOne() {
        this.img.src = '../Images/pregnan1.png';
        this.game.ctx.drawImage(this.img, this.x, this.y, this.canvasWidth, this.canvasHeight)
    }
    drawPregnantTwo() {
        this.img.src = '../Images/pregnant2.png';
        this.game.ctx.drawImage(this.img, this.x, this.y, this.canvasWidth, this.canvasHeight)
    } 
    drawPregnantThree() {
        this.img.src = '../Images/pregnan3.png';
        this.game.ctx.drawImage(this.img, this.x, this.y, this.canvasWidth, this.canvasHeight)
    }
    drawPregnantFour() {
        this.img.src = '../Images/pregnant4.png';
        this.game.ctx.drawImage(this.img, this.x, this.y, this.canvasWidth, this.canvasHeight)
    }
    
}
 

/* aqui farei os obtaculos que irao aparecer na tela a cada
x segundos de forma aleatoria. 
como fazer os obtaculos girando na tela??????
*/

/* 

/*  como fazer o obstaculo virar outra imagem quando ele ha colisao */