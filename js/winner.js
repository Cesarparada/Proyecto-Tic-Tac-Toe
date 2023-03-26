
const getWinnerHTML = (game) =>{
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

const setWinnerEventos = () => {
    document.getElementById("btn-volver").addEventListener("click", () => {
    renderInicio();
      setCpuEventos();
      setPlayersEventos();
    });
};
