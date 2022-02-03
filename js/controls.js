class Controls {
    constructor(game) {
        this.game = game;
        this.weapon = this.game.weapon;
    }
    
    keyboardEvents() {
        window.addEventListener('keydown', (e) => {
            switch (e.code) {
                case 'KeyW':
                    if (this.weapon.y > 0) {
                        this.weapon.y -= 35;
                    }
                    break;
                case 'KeyS':
                    if (this.weapon.y + this.weapon.height < 870) {
                        this.weapon.y += 35;
                    }
                    break;
            }
        });
    }
}
