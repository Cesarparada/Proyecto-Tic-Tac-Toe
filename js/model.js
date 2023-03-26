const getModel1HTML = () => {
  return `<div class="players-cpu">
    <div class="container-playersVs">
      <header class="headerPlayers"><h1>Player Vs Player</h1></header>
      <input type="text" placeholder="Player 1" id="player1" />
      <input type="text" placeholder="Player 2" id="player2" />
      <div id="container-btn-play">
        <button id="btn-play1">Jugar</button>
      </div>
    </div>
    `;
};
const getModel2HTML = () => {
  return `<div class="container-playersCpu">
      <header Class="headerCpu"><h1>Player Vs Maquina</h1></header>
      <input type="text" placeholder="Player" id="player1" />
      <input type="text" placeholder="Maquina" id="player2" />
      <div id="container-btn-play">
        <button id="btn-play2">Jugar</button>
      </div>
    </div>
    </div>
    `;
};

const renderModel1 = () => {
  root.innerHTML = getModel1HTML();
};
const renderModel2 = () => {
  root.innerHTML = getModel2HTML();
};

const setPlayersEventos = () => {
  document.getElementById("btn-play1").addEventListener("click", () => {
    const namePlayer1 = document.getElementById("player1").value;
    const namePlayer2 = document.getElementById("player2").value;

    game.player1.name = namePlayer1;
    game.player2.name = namePlayer2;

    renderGame();
    gameFunction();
  });
};
const setCpuEventos = () => {
  document.getElementById("btn-play2").addEventListener("click", () => {
    const namePlayer = document.getElementById("player1").value;
    const cpu = document.getElementById("player2").value;

    game.player1.name = namePlayer;
    game.player2.name = cpu;

    render2();
    gameFunction();
  });
};
