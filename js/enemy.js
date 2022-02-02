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
        this.width = 110;
        this.height = 90;
        // .map(name => {
        //     const image = new Image();
        //     image.src = name;
        //     return image; 
        // });
        // this.image = this.babyImages[Math.floor(Math.random() * this.babyImages.length)];
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
        // this.x -= 3;
        this.game.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
   
}

/* criar variaveis pra dificuldade do jogo // 
    

/* aqui farei os obtaculos que irao aparecer na tela a cada
x segundos de forma aleatoria. 
como fazer os obtaculos girando na tela??????
*/

/* 

/*  como fazer o obstaculo virar outra imagem quando ele ha colisao */