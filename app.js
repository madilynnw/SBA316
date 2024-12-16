const flipCard = document.querySelector(".flipCard");

const imageFaceCard = document.querySelector(".imageFaceCard");

function matchingGame() {
  // Toggle the 'flipped' class on both the flipCard and imageFaceCard to flip the card back and forth
  flipCard.classList.toggle("flipped");
  imageFaceCard.classList.toggle("flipped");
}

flipCard.addEventListener("click", matchingGame);
