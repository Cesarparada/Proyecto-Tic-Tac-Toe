//-----------Diseño vista tablero---------
getGameHTML = () => {
  return `
    <div class="caja">
            <div class="players_tablero">
                <div class="container_name1"> 
                   <div id="view-name1"><p >${game.player1.name}</p></div>
                   <div id="turno1">${game.player1.mark}</div>
                </div>
                <div class="container_name2">
                    <div id="view-name2"><p >${game.player2.name}</p></div>
                    <div id="turno2"></div>
                </div>
            </div>
                   <div class="container">
                      <button id="0" class="casilla"></button>
                      <button id="1" class="casilla"></button>
                      <button id="2" class="casilla"></button>
                      <button id="3" class="casilla"></button>
                      <button id="4" class="casilla"></button>
                      <button id="5" class="casilla"></button>
                      <button id="6" class="casilla"></button>
                      <button id="7" class="casilla"></button>
                      <button id="8" class="casilla"></button>
                   </div>      
          <div class="buttonHome">
              <button onclick="reset()" id="reset">Reset</button>
              <a id="btn-inicio">
                <img onclick="volverInicio()" class="ubi" src="multimedia/clipart.png" alt="ubicacion"</a>   
          </div>
  </div>
    `;
};
//----------Funcion del tablero----------

const gameFunction = () => {
  const htmlCasillas = document.querySelectorAll(".casilla");
  const mapCasillas = [];
  let turno1 = true;
  function manageClick(element) {
    const uiTurno1 = document.getElementById("turno1");
    const uiTurno2 = document.getElementById("turno2");

    if (element.innerHTML == "") {
      if (turno1) {
        turno1 = false;
        uiTurno1.innerHTML = game.player1.mark;
        uiTurno2.innerHTML = " ";
        element.innerHTML = game.player1.mark;
        element.disabled = true;
        mapCasillas[element.id] = "x";
      } else {
        turno1 = true;
        uiTurno1.innerHTML = " ";
        uiTurno2.innerHTML = game.player2.mark;
        element.innerHTML = game.player2.mark;
        element.disabled = true;
        mapCasillas[element.id] = "o";
      }
//-------check winner-------

      Winner(mapCasillas[element.id], mapCasillas);
       
    }
  }

  for (let i = 0; i < htmlCasillas.length; i++) {
    htmlCasillas[i].addEventListener("click", (event) => {
      const element = event.target;
      manageClick(element);
    });
  }
};
//-------Funciones de Botones reset y volver a inicio------
function reset() {
  document.querySelectorAll(".container button").forEach((element) => {
    element.innerHTML = "";
    element.disabled = false;
  });
}

function volverInicio() {
  document.getElementById("btn-inicio").addEventListener("click", () => {
    document.getElementById("btn-inicio").value;
    renderInicio();
    setModoCpu();
    setModoPlayers();
  });
}
//-----funcion render tablero ---------
const renderGame = () => {
  const btnPvP = document.getElementById("btn-play1");
  btnPvP.addEventListener("click", () => {
    root.innerHTML = getGameHTML();
    gameFunction();
  });
};
const render2 = () => {
  const btnCPU = document.getElementById("btn-play2");
  btnCPU.addEventListener("click", () => {
    root.innerHTML = getGameHTML();
    gameFunction();
  });
};
