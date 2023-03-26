
const getWinnerHTML = () =>{
    return `
        <div id="container-winner">
            <h1>Ganador</h1>
            <h2>Felicidades ${game.winner}</h2>
            <button id="btn-volver">Jugar de Nuevo</button>
        </div>
    `;
};

const renderWinner = () => {
    root.innerHTML = getWinnerHTML(game);
}

const renderDraw = () => {
    return `<h2 id="draw_title">Ha terminado en EMPATE!! Puedes reiniciar el juego con el boton si quieres</h2>`;
  };
  
  // CHECK WINNER/DRAW FUNCTIONALITY
  const checkWinner = (player, mapC) => {
    const uiRenderWinner = () => {
      if (player == "X") {
        root.innerHTML = renderWinner(game.player1.name, game.player1.mark);
      } else if (player == "O") {
        root.innerHTML = renderWinner(game.player2.name, game.player2.mark);
      }
      const restartWinner = document.getElementById("restartWinner");
      restartWinner.addEventListener("click",()=>{
        renderIndex();
        renderBoard();
      })
    };
  
    if (mapC[0] == player && mapC[1] == player && mapC[2] == player) {
      uiRenderWinner();
    } else if (mapC[3] == player && mapC[4] == player && mapC[5] == player) {
      uiRenderWinner();
    } else if (mapC[6] == player && mapC[7] == player && mapC[8] == player) {
      uiRenderWinner();
    } else if (mapC[0] == player && mapC[3] == player && mapC[6] == player) {
      uiRenderWinner();
    } else if (mapC[1] == player && mapC[4] == player && mapC[7] == player) {
      uiRenderWinner();
    } else if (mapC[2] == player && mapC[5] == player && mapC[8] == player) {
      uiRenderWinner();
    } else if (mapC[0] == player && mapC[4] == player && mapC[8] == player) {
      uiRenderWinner();
    } else if (mapC[2] == player && mapC[4] == player && mapC[6] == player) {
      uiRenderWinner();
    } else if (
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
    
  
    //   uiDrawStatus.innerHTML = renderDraw();
      
    //   restartButton.addEventListener("click", () => {
    //     renderIndex();
    //     renderBoard();
    //   });
    }
  };