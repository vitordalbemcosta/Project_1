class Shot {
	constructor(game, x, y) {
		this.game = game;
		this.x = x;
		this.y = y + 85;
		this.width = 40;
		this.height = 10;
	}

    draw() {
      this.game.ctx.fillStyle = 'red';
      this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
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
    
      crashWith(shots) {
        return !(
          this.bottom() < shots.top() ||
          this.top() > shots.bottom() ||
          this.right() < shots.left() ||
          this.left() > shots.right()
        );
      }
    
}
