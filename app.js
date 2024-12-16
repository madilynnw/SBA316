// Select all card containers
const cardContainers = document.querySelectorAll(".cardContainer");

// Function to toggle the flip effect on each card
function matchingGame(event) {
  const cardContainer = event.currentTarget; // Get the card container that was clicked
  cardContainer.classList.toggle("flipped");
}

// Add event listener to each card container
cardContainers.forEach((card) => {
  card.addEventListener("click", matchingGame);
});

// Select elements
const startButton = document.getElementById("startGameButton");
const cardGrid = document.querySelector(".cardGrid");
const cards = Array.from(cardGrid.getElementsByClassName("cardContainer"));

// Fisher-Yates Shuffle Algorithm to shuffle the cards
function shuffleCards() {
  // Clone the array of cards to prevent modifying the original array
  let shuffledCards = cards.slice();

  // Fisher-Yates shuffle algorithm
  for (let i = shuffledCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at indices i and j
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
  }

  // Empty the grid before appending shuffled cards
  cardGrid.innerHTML = "";

  // Append the shuffled cards to the grid
  shuffledCards.forEach((card) => {
    cardGrid.appendChild(card);
  });
}

// Add event listener to shuffle cards when "Start Game" is clicked
startButton.addEventListener("click", shuffleCards);
