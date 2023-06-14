const enemiesImages = [
  "./docs/assets/Images/python-symbol.png",
  "./docs/assets/Images/csharp.png",
  "./docs/assets/Images/ruby.png",
  "./docs/assets/Images/java.png",
  "./docs/assets/Images/php.png",
  "./docs/assets/Images/vue.png",
  "./docs/assets/Images/angular.png",
  "./docs/assets/Images/c.png",
  "./docs/assets/Images/wordpress.png",
];

class Enemy {
  constructor(game, index) {
    this.index = index;
    this.game = game;
    this.x = game.canvasWidth;
    this.y = Math.floor(Math.random() * 700);
    this.width = 90;
    this.height = 90;
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
    this.game.ctx.drawImage(
      this.image,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
