class Controls() {
    constructor(game) {
        this.game = game;
        this.weapon = this.game.weapon;
    }
    
    
    keyboardEvents() {
        window.addEventListener('keydown', (e) => {
            switch (e.code) {
                case 'ArrowUp':
            }
        })
    }
}



/* nesta classe vou ter que adicionar os eventos 
do keyboard com o addEventListener keydown. 
A arminha vai ter duas cases uma arrow top e uma 
arrow bottom. */ 

/* tambem terei que adicinar o eventListener de 
usar o espaco para atirar com a arma */