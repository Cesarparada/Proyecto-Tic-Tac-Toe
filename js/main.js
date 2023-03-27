const root = document.getElementById("root");

const game = {
  player1: {
    name: null,
    mark: '<img  class="ficha" src="multimedia/Pokeball.png">',
  },
  player2: {
    name: null,
    mark: '<img class="ficha" src="multimedia/psyduck.png">',
  },
  maquina: {
    name: null,
  },
  player: {
    name: null,
  },
  winner: null,
  iconoVs: '<img class="versus" src="multimedia/players.png">',
  iconoCpu: '<img class="versus" src="multimedia/robot.png">',
};

const getInicioHTML = () => {
  return `
<div class="container-home">
      <div class="title-home"><h1>Bienvenido a Tic Tac Món</h1></div>
      <div class="card">
        <div class="face front">
          <h2 class="titlecard">Información del Juego</h2>
          <p>
            En Tic Tac Toe los jugadores se turnan para completar con sus
            propias fichas “X” u “O”, en la cuadrícula de tres cuadros para
            completar la secuencia de fichas y adelantarse a su oponente,
            ganando así el juego.
          </p>
          <div>
            <img class="items" src="multimedia/caterpie.png" alt="caterpie" />
          </div>
        </div>
        <div class="face back">
          <h2 class="titlecard">Instrucciones del Juego</h2>
          <h4>Judar vs Jugador</h4>
          <p>
            Escribe tu nombre y selecciona tu ficha para juegar contra otros
            jugadores, logrando hacer una secuencia de tres fichas para ganar.
          </p>
          <h4>Jugador vs CPU</h4>
          <p>
            Escribe tu nombre y selecciona tu ficha para juegar contra la
            maquina, logrando hacer una secuencia de tres de tus fichas le
            podras ganar.
          </p>
          <div>
            <img class="items" src="multimedia/squirtle.png" alt="squirtle" />
          </div>
        </div>
      </div>
      <div>
        <input type="checkbox" id="btn-modal" />
        <label for="btn-modal" class="lbl-modal">Play</label>
        <div class="modal">
          <div class="contenedor">
            <header>Modo de Juego</header>
            <label for="btn-modal">x</label>
            <div class="contenido">
              <div>
                <button id="versus-players"> ${game.iconoVs} </button>
              </div>
              <div>
                <button id="versus-cpu"> ${game.iconoCpu} </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

const setModoPlayers = () => {
  document.getElementById("versus-players").addEventListener("click", () => {
    const btn = document.getElementById("versus-players").value;

    renderModel1();
    setPlayersEventos();
  });
};
const setModoCpu = () => {
  document.getElementById("versus-cpu").addEventListener("click", () => {
    const btn = document.getElementById("versus-cpu").value;

    renderModel2();
    setCpuEventos();
  });
};

const renderInicio = () => {
  root.innerHTML = getInicioHTML();
};

renderInicio();
setModoCpu();
setModoPlayers();
