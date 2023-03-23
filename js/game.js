const getGameHTML = () => {
    return `
    <div class="caja">
      <div class="container">
        <button class="casilla"></button>
        <button class="casilla"></button>
        <button class="casilla"></button>
        <button class="casilla"></button>
        <button class="casilla"></button>
        <button class="casilla"></button>
        <button class="casilla"></button>
        <button class="casilla"></button>
        <button class="casilla"></button>
      </div>
      <div class="buttonHome">
        <button class="restart">Restart</button>
        <a href="home.html"
          ><img class="ubi" src="multimedia/clipart.png" alt="ubicacion"
        /></a>
      </div>
    </div>
    `;
};
const renderGame = () => {
    root.innerHTML = getGameHTML();
};
renderGame();
