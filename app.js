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

const startButton = document.getElementById("startGameButton");
const cardGrid = document.querySelector(".cardGrid");
const cards = Array.from(cardGrid.getElementsByClassName("cardContainer"));

// Fisher-Yates Shuffle Algorithm
function shuffleCards() {
  console.log("Shuffling cards..."); // Debug log
  let shuffledCards = cards.slice();

  // Fisher-Yates shuffle algorithm
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

  console.log("Cards shuffled"); // Debug log

  // Change the button to Reset Game after the game starts
  startButton.textContent = "Reset Game";
  startButton.removeEventListener("click", shuffleCards);
  startButton.addEventListener("click", resetGame);
}

// Function to reset the game
function resetGame() {
  // Revert button text to Play Game
  startButton.textContent = "Play Game";

  // Optionally, you could shuffle cards back or reset the game state
  // Here, we'll just clear the grid for simplicity
  cardGrid.innerHTML = "";

  // Recreate the cards to restore the initial state (You can improve this by storing the original card order)
  createCards();

  // Add the event listener back to start the game again
  startButton.removeEventListener("click", resetGame);
  startButton.addEventListener("click", shuffleCards);
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
    // Add more cards as needed
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
startButton.addEventListener("click", shuffleCards);
