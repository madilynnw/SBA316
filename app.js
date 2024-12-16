// Initialize the score
let score = 0;
let flippedCards = [];

// Update the score display
function updateScore() {
  document.getElementById("scoreBoard").innerText = "Score: " + score;
}

// Function to toggle the flip effect on each card
function matchingGame(event) {
  const cardContainer = event.currentTarget;

  // Prevent flipping more than 2 cards at a time
  if (cardContainer.classList.contains("flipped") || flippedCards.length === 2)
    return;

  cardContainer.classList.toggle("flipped");

  // Push the flipped card into the flippedCards array
  flippedCards.push(cardContainer);

  // If two cards are flipped, check for a match
  if (flippedCards.length === 2) {
    setTimeout(() => checkMatch(), 1000); // Delay for 1 second before checking the match
  }
}

// Function to check if the two flipped cards match
function checkMatch() {
  const [card1, card2] = flippedCards;

  // Compare the cards' back images or data to check if they match
  if (
    card1.querySelector(".imageFaceCard img").src ===
    card2.querySelector(".imageFaceCard img").src
  ) {
    // If they match, add 100 to the score
    score += 100;
    updateScore(); // Update the score on the screen
  } else {
    // If they don't match, flip them back
    card1.classList.remove("flipped");
    card2.classList.remove("flipped");
  }

  // Reset the flipped cards array for the next pair
  flippedCards = [];
}

// Function to shuffle the cards using Fisher-Yates algorithm
function shuffleCards() {
  console.log("Shuffling cards...");
  let shuffledCards = cards.slice();

  for (let i = shuffledCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
  }

  // Empty the card grid before appending shuffled cards
  cardGrid.innerHTML = "";

  // Append shuffled cards to the grid
  shuffledCards.forEach((card) => {
    cardGrid.appendChild(card);
  });

  console.log("Cards shuffled");

  // Change the button to Reset Game after the game starts
  startButton.textContent = "Reset Game";
  startButton.removeEventListener("click", shuffleCards);
  startButton.addEventListener("click", resetGame);
}

// Function to reset the game
function resetGame() {
  score = 0;
  updateScore(); // Reset the score display
  flippedCards = [];

  cardGrid.innerHTML = "";

  createCards();

  startButton.removeEventListener("click", resetGame);
  startButton.addEventListener("click", shuffleCards);

  // Flip all cards to the front (remove flipped class)
  const allCards = document.querySelectorAll(".cardContainer");
  allCards.forEach((card) => {
    card.classList.remove("flipped"); // Remove flipped class to flip the card back to the front
  });
}

// Function to create the cards again
function createCards() {
  const initialCards = [
    {
      front:
        "https://images.pexels.com/photos/1789968/pexels-photo-1789968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      back: "https://i0.wp.com/static.stacker.com/s3fs-public/styles/1280x720/s3/This_is_fine.png?ssl=1",
    },
    {
      front:
        "https://images.pexels.com/photos/1789968/pexels-photo-1789968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      back: "https://i0.wp.com/static.stacker.com/s3fs-public/styles/1280x720/s3/This_is_fine.png?ssl=1",
    },
    {
      front:
        "https://images.pexels.com/photos/1789968/pexels-photo-1789968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      back: "https://duet-cdn.vox-cdn.com/thumbor/0x0:929x525/640x427/filters:focal(464x262:465x263):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/15877061/Screen_Shot_2016-08-01_at_12.34.21_PM.0.0.1470069300.png",
    },
    {
      front:
        "https://images.pexels.com/photos/1789968/pexels-photo-1789968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      back: "https://duet-cdn.vox-cdn.com/thumbor/0x0:929x525/640x427/filters:focal(464x262:465x263):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/15877061/Screen_Shot_2016-08-01_at_12.34.21_PM.0.0.1470069300.png",
    },
  ];

  initialCards.forEach((card) => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("cardContainer");

    const flipCard = document.createElement("div");
    flipCard.classList.add("flipCard");
    const frontImg = document.createElement("img");
    frontImg.src = card.front;
    flipCard.appendChild(frontImg);

    const imageFaceCard = document.createElement("div");
    imageFaceCard.classList.add("imageFaceCard");
    const backImg = document.createElement("img");
    backImg.src = card.back;
    imageFaceCard.appendChild(backImg);

    cardContainer.appendChild(flipCard);
    cardContainer.appendChild(imageFaceCard);

    cardGrid.appendChild(cardContainer);
  });
}

// Add event listener for start button click
const startButton = document.getElementById("startGameButton");
startButton.addEventListener("click", function () {
  // On Play Game button click, reset and shuffle the cards
  if (startButton.textContent === "Play Game") {
    shuffleCards(); // Shuffle and start the game
  } else {
    resetGame(); // Reset the game
  }
});

const cardGrid = document.querySelector(".cardGrid");
const cards = Array.from(cardGrid.getElementsByClassName("cardContainer"));

// Add event listeners for each card container
cards.forEach((card) => {
  card.addEventListener("click", matchingGame);
});
