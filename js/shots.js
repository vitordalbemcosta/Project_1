class Shot {
	constructor(game, x, y) {
		this.game = game;
		this.x = x;
		this.y = y + 50;
		this.width = 50;
		this.height = 50;
        this.speed = 30;
        this.img = new Image();
	}

    draw() {
        this.img.src = "/Images/poop.png";
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    fireShot() {
        this.x += this.speed;
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
    
      crashWith(enemy) {
        return !(
          this.bottom() < enemy.top() ||
          this.top() > enemy.bottom() ||
          this.right() < enemy.left() ||
          this.left() > enemy.right()
        );
 XX     }
    
}
/* fazer amanha !! */
/* nao faco ideia de como vou fazer o disparo...
disparo saindo da posicao que estiver minha weapon. */