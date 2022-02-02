class MyGame {
    constructor() {
      this.canvas = document.getElementById('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.weapon = null;
      this.obstacles = [];
      this.shots = [];
      this.background = new Image();
      this.frames = 0;
      this.x = 0;
      this.y = 0;
      this.canvasWidth = 1250;
      this.canvasHeight = 800;
      this.intervalId = 0;
      this.enemies = [];
      this.score = 0;
      
    }
    start() {
      this.weapon = new Weapon(this, this.x, 600, 180, 180);
      const controls = new Controls(this);
      controls.keyboardEvents();

      this.intervalId = setInterval(() => {
        this.update();
      }, 1000 / 60);
   }

   update() {
      this.drawBackground();
      this.weapon.draw();
      this.createEnemy();
      this.enemies.forEach((enemy) => {
        enemy.x --;
        enemy.drawEnemy();
      });

      this.createShots();
      this.shots.forEach((shot, index) => {
        if ( shot.x < 1300) {
          shot.x += 40;
          shot.draw();
        } else {
          this.shots.splice(index, 1)
        }
      });

      this.checkImpact();
      if(this.checkImpact()) {
        this.drawScore();
      }
      this.frames ++;
      this.drawScore();

    }
    
  
   drawBackground() {
       this.background.src = '../Images/bercario.jpeg';
       this.ctx.drawImage(this.background, this.x, this.y, this.canvasWidth, this.canvasHeight)
   }

   createShots() {
		window.addEventListener('keydown', (e) => {
			switch (e.code) {
			  case 'KeyX':
				this.shots.push(new Shot(this, this.weapon.x, this.weapon.y));
			  break;
			}
		});
	}

  createEnemy() {
		if (this.frames % 100 === 0) {
      let index = Math.floor(Math.random() * 9);
      this.enemies.push(new Enemy(this, index));
    }
	}

  checkImpact() {
    for (let e = 0; e < this.enemies.length; e++) {
      for (let s = 0; s < this.shots.length; s++) {
          if (this.shots[s].crashWith(this.enemies[e])) {
            this.shots.splice(s, 1);
            this.enemies.splice(e, 1);            
          }
        }
      }

  }

  stop() {
    clearInterval(this.intervalId);
  }

  drawScore() {
    let score = Math.floor(this.score);
    score++;
    this.ctx.font = '60px serif';
    this.ctx.fillStyle = 'pink';
    this.ctx.fillText(`Terminations: ${score}`, 80, 100);
  } 
}