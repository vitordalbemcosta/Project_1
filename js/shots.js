class Shot {
	constructor(game, x, y) {
		this.game = game;
		this.x = x;
		this.y = y + 50;
		this.width = 40;
		this.height = 10;
    //this.img = new Image();
    // const imgObj = new Image();
    // imgObj.addEventListener('load', () => {
    //     this.img = imgObj;
    //     this.draw();
    // })
    // imgObj.src = "../Images/poop.png";
	}

    draw() {
      this.game.ctx.fillStyle = 'red';
      this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
        //this.img.src = "../Images/poop.png";
        //this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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
    
      crashWith(Enemy) {
        return !(
          this.bottom() < Enemy.top() ||
          this.top() > Enemy.bottom() ||
          this.right() < Enemy.left() ||
          this.left() > Enemy.right()
        );
      }
    
}
/* fazer amanha !! */
/* nao faco ideia de como vou fazer o disparo...
disparo saindo da posicao que estiver minha weapon. */