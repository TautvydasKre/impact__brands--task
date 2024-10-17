//////////////////////////////////
///<-- Carousel code -->///
//////////////////////////////////

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

//////////////////////////////////
///<-- FAQ'S code -->///
//////////////////////////////////

document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";

    question.classList.toggle("active");
  });
});

//////////////////////////////////
///<-- Burger code -->///
//////////////////////////////////

const burger = document.querySelector(".burger");
const navList = document.querySelector(".main__nav-list");

burger.addEventListener("click", () => {
  navList.classList.toggle("active");
});
