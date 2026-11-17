// *** CAROUSEL ***
// TODO
carousel = document.querySelector(".carousel__container");
carousel.scrollLeft = 520;
prevButton = document.querySelector(".carousel__button--prev");
nextButton = document.querySelector(".carousel__button--next");
const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

// Largeur de défilement d’un item
if (carousel) {
  // Scroll au clic sur le bouton précédent
  prevButton.addEventListener("click", () => {
    carousel.scrollLeft -= 260;
  });

  // Scroll au clic sur le bouton suivant
  nextButton.addEventListener("click", () => {
    carousel.scrollLeft += 260;
  });
}
premierItem = document.querySelector(".carousel__item");
260;


