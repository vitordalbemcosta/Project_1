window.onload = () => {
  document.getElementById('start-game').onclick = () => {
    startGame();
  };

  function startGame() {
    const game = new MyGame();
    game.start();
  }
}; 