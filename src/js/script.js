// *** CAROUSEL ***
const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const carouselNavigation = document.querySelector(".carousel__navigation");

if (carousel) {
  const firstItem = carousel.querySelector(".carousel__item");

  if (firstItem) {
    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
    const scrollDistance = firstItem.getBoundingClientRect().width + gap;
    carousel.scrollLeft = scrollDistance * 2;

    if (prevButton) {
      prevButton.addEventListener("click", () => {
        carousel.scrollBy({ left: -scrollDistance, behavior: "smooth" });
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        carousel.scrollBy({ left: scrollDistance, behavior: "smooth" });
      });
    }
  }

  if (carouselNavigation) {
    carouselNavigation.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const link = event.target.closest("a[href^='#']");
      const item = link
        ? document.getElementById(link.hash.slice(1))
        : null;

      if (item && carousel.contains(item)) {
        item.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    });
  }
}

