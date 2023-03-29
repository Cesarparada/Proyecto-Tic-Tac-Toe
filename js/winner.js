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
  return `<div id="status">
            <h2 id="draw_title">Ha terminado en EMPATE!! Puedes reiniciar el juego con el boton si quieres</h2>  
            </div>`;
};
const renderEmpate = ()=>{
  root.innerHTML = getEmpateHTML();
};


function volverJuego() {
  document.getElementById("reset_Juego").addEventListener("click", () => {
    document.getElementById("reset_Juego").value;
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
  } else if (
    mapBoxes[0] != undefined &&
    mapBoxes[1] != undefined &&
    mapBoxes[2] != undefined &&
    mapBoxes[3] != undefined &&
    mapBoxes[4] != undefined &&
    mapBoxes[5] != undefined &&
    mapBoxes[6] != undefined &&
    mapBoxes[7] != undefined &&
    mapBoxes[8] != undefined
  ) {
    
  
 
    uiDrawStatus.innerHTML = renderEmpate();


  }
};
