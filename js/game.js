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
      this.intervalId = null;
      this.obstacles = new Obstacles(this);
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
       
       this.obstacles.drawBabyOne(1000, 50)
      //  this.obstacles.drawBabyTwo(1000, 100)
      //  this.obstacles.drawBabyThree(1000, 200)
      //  this.obstacles.drawBabyFour(1000, 300)
      //  this.obstacles.drawBabyFive(1000, 400)
   }

   drawBabies() {
       this.Obstacles.babiesArray[Math.floor(Math.random() * Obstacles.babiesArray.length)];
       this.ctx.drawImage(this.background, this.x, this.y, this.canvasWidth, this.canvasHeight)

   }
   
   drawBackground() {
       this.background.src = './Images/background2 .jpeg';
       this.ctx.drawImage(this.background, this.x, this.y, this.canvasWidth, this.canvasHeight)
   }
   drawObstacles() {
    if (this.frames % 500 === 0) {
      this.obstacles.push(new Obstacles(this));
    }
  }
}



/* start, update, background, criar obstaculos, fazer a checagem de 
colisao dos tiros com o obstaculos.... */