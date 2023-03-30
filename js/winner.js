//------------diseño vista winner---------
const getWinnerHTML = (player) => {
  return `<div class="vista_Winner">
                <div class="container_winner">
                    <h1 class="winner_title">¡Eres el Ganador!</h1>
                    <div class="conainer_ganador">
                        <h2 class="h2-winner">Felicidades, <span id="ganador">"${player}"</span>. Has ganado el juego.</h2>
                       <div class="imgWinner"></div> 
                    </div> 
                    <button id="reset_Juego" onclick="volverJuego()">Volver a Jugar</button>
                </div>               
            </div>
    `;
};
//--------------diseño vista empate----------
const getEmpateHTML = () => {
  return `<div id="containerEmpate">
           <div class="containerMessage"> <h2 id="empate_title">EMPATE!! Puedes Jugar de nuevo si lo deseas.</h2></div>  
                    <button id="reset_empate" onclick="resetEmpate()">Volver a Jugar</button>
                </div>    
            </div>`;
};

//------------funcion render empate------------
const renderEmpate = () => {
  root.innerHTML = getEmpateHTML();
};

//-----botón renderiza inicio desde empate------------
function resetEmpate() {
  document.getElementById("reset_empate").addEventListener("click", () => {
    renderInicio();
    setModoCpu();
    setModoPlayers();
  });
}

//-----botón renderiza inicio desde winner------------
function volverJuego() {
  document.getElementById("reset_Juego").addEventListener("click", () => {
    renderInicio();
    setModoCpu();
    setModoPlayers();
  });
}
//---------funcion render winner-------------------
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

  //-------check empate-----
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
    //--------Render vista empate-------
    renderEmpate();
  }
};
// renderWinner();