
const getWinnerHTML = (game) =>{
    return `
        <div id="container-welcome">
            <h1>Ganador</h1>
            <h2>${game.winner}</h2>
            <button id="btn-restart">Volver al inicio</button>
        </div>
    `;
}

const renderWinner = () => {
    root.innerHTML = getWinnerHTML(game);
}

const setWinnerEventos = () => {
    document.getElementById("btn-restart").addEventListener("click", () => {
        renderInicio();
        setInicioEventos();
    });
}