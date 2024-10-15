let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const bubbles = document.querySelectorAll(".bubble");

document.querySelector(".next").addEventListener("click", () => {
  changeSlide(1);
});

document.querySelector(".prev").addEventListener("click", () => {
  changeSlide(-1);
});

function changeSlide(direction) {
  slides[currentSlide].classList.remove("active");
  bubbles[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  slides[currentSlide].classList.add("active");
  bubbles[currentSlide].classList.add("active");
}

slides[currentSlide].classList.add("active");
bubbles[currentSlide].classList.add("active");
