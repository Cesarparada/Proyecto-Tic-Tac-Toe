const getWinnerHTML = (player) => {
  return `<div class="vista_Winner">
                <div class="container_winner">
                    <h1 class="winner_title">¡Eres el Ganador!</h1>
                    <div class="conainer_ganador">
                        <h2 class="h2-winner">Felicidades,<span id="ganador">${player}</span>. Has ganado el juego.</h2>
                       <div class="imgWinner"></div> 
                    </div> 
                    <button id="reset_Juego" onclick="volverJuego()">Volver a Jugar</button>
                </div>               
            </div>
    `;
};

const getEmpateHTML = () => {
  return `<div id="containerEmpate">
           <div class="containerMessage"> <h2 id="empate_title">EMPATARON!! Jueguen de nuevo y consigan un ganador</h2></div>  
                    <button id="reset_empate" onclick="resetEmpate()">Volver a Jugar</button>
                </div>    
            </div>`;
};

const renderEmpate = () => {
  root.innerHTML = getEmpateHTML();
};

function resetEmpate() {
  document.getElementById("reset_empate").addEventListener("click", () => {
    // document.getElementById("reset_empate").value;
    renderInicio();
    setModoCpu();
    setModoPlayers();
  });
}

function volverJuego() {
  document.getElementById("reset_Juego").addEventListener("click", () => {
    // document.getElementById("reset_Juego").value;
    renderInicio();
    setModoCpu();
    setModoPlayers();
  });
}
const renderWinner = () => {
  root.innerHTML = getWinnerHTML();
};

// -----------checkWinner------------

const Winner = (player, mapC) => {
  const uiRenderWinner = () => {
    if (player == "x") {
      root.innerHTML = getWinnerHTML(game.player1.name);
    } else {
      root.innerHTML = getWinnerHTML(game.player2.name);
    }
  };
  if (mapC[0] == player && mapC[1] == player && mapC[2] == player) {
    uiRenderWinner();
  }
  if (mapC[3] == player && mapC[4] == player && mapC[5] == player) {
    uiRenderWinner();
  }
  if (mapC[6] == player && mapC[7] == player && mapC[8] == player) {
    uiRenderWinner();
  }
  if (mapC[0] == player && mapC[3] == player && mapC[6] == player) {
    uiRenderWinner();
  }
  if (mapC[1] == player && mapC[4] == player && mapC[7] == player) {
    uiRenderWinner();
  }
  if (mapC[2] == player && mapC[5] == player && mapC[8] == player) {
    uiRenderWinner();
  }
  if (mapC[0] == player && mapC[4] == player && mapC[8] == player) {
    uiRenderWinner();
  }
  if (mapC[2] == player && mapC[4] == player && mapC[6] == player) {
    uiRenderWinner();
  }

  if (
    mapC[0] != undefined &&
    mapC[1] != undefined &&
    mapC[2] != undefined &&
    mapC[3] != undefined &&
    mapC[4] != undefined &&
    mapC[5] != undefined &&
    mapC[6] != undefined &&
    mapC[7] != undefined &&
    mapC[8] != undefined
  ) {

    renderEmpate();
  }

};

