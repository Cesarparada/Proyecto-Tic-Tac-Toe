
const getWinnerHTML = () => {
    return `<div class="vista_Winner">
                <div class="container_winner">
                    <h1 class="winner_title">¡Eres el Ganador!</h1>
                    <div class="conainer_ganador">
                        <h2 class="h2-winner">Felicidades,(ganador) . Has ganado el juego.</h2>
                       <div class="imgWinner"></div> 
                    </div> 
                    <button id="reset_Juego" onclick="volverJuego()">Volver a Jugar</button>
                </div>
                
            </div>
    `;
  };
  
  function  volverJuego(){
    document.getElementById("reset_Juego").addEventListener("click", () => {
      document.getElementById("reset_Juego").value;
      renderInicio();
      setModoCpu();
      setModoPlayers();
    });
    };
   // -----------checkWinner------------

  const checkWinner = (player, mapC) => {
    const uiRenderWinner = () => {
      if (player == "x") {
        root.innerHTML = renderWinner(game.player2.name);
      } else {
        root.innerHTML = renderWinner(game.player1.name);
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
  };


  const renderWinner = () => {
    root.innerHTML = getWinnerHTML();
  };
  renderWinner()