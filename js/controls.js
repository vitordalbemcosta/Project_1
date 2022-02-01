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
                        this.weapon.y -= 30;
                    }
                    break;
                case 'KeyS':
                    if (this.weapon.y + this.weapon.height < 800) {
                        this.weapon.y += 30;
                    }
                    break;
            }
        });
    }
}





/* nesta classe vou ter que adicionar os eventos 
do keyboard com o addEventListener keydown. 
A arminha vai ter duas cases uma arrow top e uma 
arrow bottom. */ 

/* shoot key vai ser no espaco */

/* tambem terei que adicinar o eventListener de 
usar o espaco para atirar com a arma */