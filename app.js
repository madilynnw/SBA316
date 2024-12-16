// Select the card container
const cardContainer = document.querySelector(".cardContainer");

// Function to toggle the flip effect
function matchingGame() {
  // Toggle the 'flipped' class on the cardContainer to flip the card back and forth
  cardContainer.classList.toggle("flipped");
}

// Add event listener to the card container
cardContainer.addEventListener("click", matchingGame);
