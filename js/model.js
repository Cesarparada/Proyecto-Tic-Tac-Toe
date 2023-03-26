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
    const name1Input = document.getElementById("player1").value;
    const name2Input = document.getElementById("player2").value;

    game.player1.name = name1Input;
    game.player2.name = name2Input;

    renderGame();
    gameFunction();
  });
};
const setCpuEventos = () => {
  document.getElementById("btn-play2").addEventListener("click", () => {
    const nameInput = document.getElementById("player1").value;
    const cpuInput = document.getElementById("player2").value;

    game.player1.name = nameInput;
    game.player2.name = cpuInput;

    render2();
    gameFunction();
  });
};
