const gameListContainer = document.querySelector('.game-list-container');
const gameDetailsContainer = document.querySelector('.game-details-container');

// Fetch the game data from the JSON file
fetch('http://localhost:3000/games')
  .then(response => response.json())
  .then(games => {
    // Display the list of games
    displayGameList(games);

    // Add event listeners to the game items
    const gameItems = document.querySelectorAll('.game-item');
    gameItems.forEach(gameItem => {
      gameItem.addEventListener('click', () => {
        const gameId = gameItem.dataset.id;
        const selectedGame = games.find(game => game.id === gameId);
        displayGameDetails(selectedGame);
      });
    });
  });

function displayGameList(games) {
  gameListContainer.innerHTML = '';
  games.forEach(game => {
    const gameItem = document.createElement('div');
    gameItem.classList.add('game-item');
    gameItem.dataset.id = game.id;
    gameItem.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <h3>${game.title}</h3>
      <p>${game.description}</p>
      <p>$${game.price}</p>
    `;
    gameListContainer.appendChild(gameItem);
});
}

function displayGameDetails(game) {
gameDetailsContainer.innerHTML = '';
const gameDetails = document.createElement('div');
gameDetails.innerHTML = `
  <img src="${game.image}" alt="${game.title}">
  <h3>${game.title}</h3>
  <p>${game.description}</p>
  <p>$${game.price}</p>
  <button id="purchase-btn">Purchase</button>
  <button id="refund-btn">Refund</button>
`;
gameDetailsContainer.appendChild(gameDetails);

const purchaseButton = document.querySelector('#purchase-btn');
const refundButton = document.querySelector('#refund-btn');
purchaseButton.addEventListener('click', () => {
  alert(`Thank you for purchasing ${game.title} for $${game.price}`);
});
refundButton.addEventListener('click', () => {
  alert(`Your refund for ${game.title} for $${game.price} has been processed`);
});
}
