const flipCard = document.querySelector(".flipCard");

const imageFaceCard = document.querySelector(".imageFaceCard");

function matchingGame() {
  if (imageFaceCard.classList.contains("flipCard")) {
    imageFaceCard.classList.removed("flipCard");
  } else {
    imageFaceCard.classList.add("flipCard");
  }
}

flipCard.addEventListener("click", matchingGame);
