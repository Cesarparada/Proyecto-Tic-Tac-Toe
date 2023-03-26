const getGameHTML = () => {
  return `
    <div class="caja">
      <div class="container">
        <button class="casilla"></button>
        <button class="casilla"></button>
        <button class="casilla"></button>
        <button class="casilla"></button>
        <button class="casilla"></button>
        <button class="casilla"></button>
        <button class="casilla"></button>
        <button class="casilla"></button>
        <button class="casilla"></button>
      </div>
       <div class="buttonHome">
        <button id="restart">Restart</button>
        <button id="btn-inicio"><img class="ubi" src="multimedia/clipart.png" alt="ubicacion"</button>   
      </div>
      <div> 
      <p id="game-view-name1">${game.player1.name}</p>
      <p id="game-view-name2">${game.player2.name}</p>
      </div>
    </div>
    `;
};

// let combinaciones = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];
const gameFunction = () => {
  const htmlCasillas = document.querySelectorAll(".casilla");
  const mapCasillas = [];
  let turno1 = false;

  function manageClick(element) {
    console.log(element.innerHTML);

    if ((element.innerHTML = " ")) {
      if (turno1) {
        element.innerHTML =
          '<img  class="ficha" src="multimedia/Pokeball.png">';

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
};

const renderGame = () => {
  const btnPvP = document.getElementById("btn-play1");
  btnPvP.addEventListener("click", () => {
    root.innerHTML = getGameHTML();
    gameFunction();
  });
};
const render2 = () => {
  const btnCpu = document
    .getElementById("btn-play2")
    .addEventListener("click", () => {
      root.innerHTML = getGameHTML();
      gameFunction();
    });
};
