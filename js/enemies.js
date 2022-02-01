class Enemies {
    constructor(game) {
        this.enemies = Array.from({length:10}).map(n => {
            return new Enemy(game);
        });
    }
    drawEnemies(){
        this.enemies.forEach(e => {
            e.drawEnemy();
        });
    }
}