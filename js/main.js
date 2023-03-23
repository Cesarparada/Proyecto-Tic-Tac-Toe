const root = document.getElementById("root");

///////Vista Inicio///////

const getInicioHTML= () => {
  return `
  <div class="container-home">
      <div class="title-home"><h1>Bienvenido a Tic Tac Món</h1></div>
      <div class="card">
        <div class="face front">
          <h2>Información del Juego</h2>
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
          <h2>Instrucciones del Juego</h2>
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
                <a href="index.html">
                  <img
                    class="players"
                    src="multimedia/players.png"
                    alt="Players"
                /></a>
              </div>
              <div>
                <a href="index.html">
                  <img class="players" src="multimedia/robot.png" alt="Robot"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};


const htmlCasillas = document.querySelectorAll(".casilla");
const mapCasillas = [];
let turno1 = false;

function manageClick(element) {
  console.log(element.innerHTML);

  if ((element.innerHTML = " ")) {
    if (turno1) {
      element.innerHTML = '<img  class="ficha" src="multimedia/Pokeball.png">';

      mapCasillas[element.id] = "x";
    } else {
      element.innerHTML = '<img class="ficha" src="multimedia/psyduck.png">';
      mapCasillas[element.id] = "o";
    }
    turno1 = !turno1;
  }

  manageBoard(mapCasillas);
}

const manageBoard = (casillas) => {
  for (let casilla of casillas) {
    console.log(casilla);
  }
};

for (let i = 0; i < htmlCasillas.length; i++) {
  htmlCasillas[i].addEventListener("click", (event) => {
    const element = event.target;
    manageClick(element);
  });

  htmlCasillas[i].id = i;
}
//////Vista Inicio/////////

const renderInicio = () => {
    root.innerHTML = getInicioHTML();
};
//////Llamada a la Funcion//////

renderInicio();
