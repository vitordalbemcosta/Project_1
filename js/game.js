class MyGame {
    constructor() {
      this.canvas = document.getElementById('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.weapon = null;
      this.obstacles = [];
      this.shots = [];
      //this.bullets = [];
      this.background = new Image();
      this.frames = 0;
      this.x = 0;
      this.y = 0;
      this.canvasWidth = 1250;
      this.canvasHeight = 800;
      this.intervalId = null;
      this.enemies = new Enemies(this);
      this.shot = new Shot(this, 10, 10, 200, 200);
    }
    start() {
      this.weapon = new Weapon(this, this.x, 600, 120, 150);
      const controls = new Controls(this);
      controls.keyboardEvents();
      this.intervalId = setInterval(() => {
          this.update();
      }, 1000 / 10);


   }

   update() {
      this.drawBackground();
      this.weapon.draw();
      this.enemies.drawEnemies();
      console.log(`this.shots`, this.shots)
      this.shots.forEach((shot) => {
        shot.x++;
        shot.draw();
      });
    }
  
   /*drawBabies() {
    //   this.ctx.drawImage(this.background, this.x, this.y, this.canvasWidth, this.canvasHeight)

   } */
   
   drawBackground() {
       this.background.src = './Images/background2 .jpeg';
       this.ctx.drawImage(this.background, this.x, this.y, this.canvasWidth, this.canvasHeight)
   }

   createShots() {
    this.shots.push(new Shots(this, 10, 10, 200, 200))
   }
   
}



/* start, update, background, criar obstaculos, fazer a checagem de 
colisao dos tiros com o obstaculos.... */