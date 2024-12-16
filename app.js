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
