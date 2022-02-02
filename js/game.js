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
      // this.enemies = new Enemies(this);
      this.enemies = [];
      
    }
    start() {
      this.weapon = new Weapon(this, this.x, 600, 120, 150);
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

      // this.enemies.drawEnemies();
      this.createShots();
      this.shots.forEach((shot) => {
        if ( shot.x < 1300) {
          shot.x += 40;
          shot.draw();
        } else {
          this.shots.splice(shot)
        }
        //this.checkGameOver();
      });
      //this.colision(this.shots, this.enemies); -------> nao consegui fazer colidir
      this.frames++;
      this.drawScore();

    }
    
    /*colision(shots, enemies) {
      shots.map(s => {
        enemies.map(e => {
          if (s.x === e.x && s.y === e.y){
            MyGame....
          }
        });
      });
    } 
    */
   
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

  // createObstacles() {
  //   if (this.frames % 300 === 0) {
  //     this.obstacles.push(new Obstacle(this));
  //   }
  // }

  /* checkGameOver() {
    const weapon = this.weapon;
    const crashed = this.obstacles.some(function (enemies) {
      return enemies.crashWith(enemies);
    });
    if (crashed) {
      this.stop();
    }
  }
  */
  checkGameOver() {
    const enemies = this.enemy;
    const crashed = this.enemies.some(function (obstacle) {
      return enemies.crashWith(obstacle);
    });
    if (crashed) {
      this.stop();
      this.clear();
    }

  }

  

  stop() {
    clearInterval(this.intervalId);
  }

  drawScore() {
    let score = Math.floor(this.frames);
    this.ctx.font = '45px serif';
    this.ctx.fillStyle = 'dark red';
    this.ctx.fillText(`Choices: ${score}`, 200, 100);
  } 
}