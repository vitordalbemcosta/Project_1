class Enemy {
    constructor(game) {
        this.game = game;
        this.x = Math.floor(Math.random() * ((1200 - 850) + 680));
        this.y = Math.floor(Math.random() * 800);
        this.width = 50;
        this.height = 50;
        this.babyImages = ["../Images/baby1.png", "../Images/baby2.png", "../Images/baby3.png", "../Images/baby4.png", "../Images/baby5.png", "../Images/pregnan1.png", "../Images/pregnant2.png", "../Images/pregnan3.png", "../Images/pregnant4.png"].map(name => {
            const image = new Image();
            image.src = name;
            return image; 
        });
        this.image = this.babyImages[Math.floor(Math.random() * this.babyImages.length)];
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
        this.x -= 2;
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