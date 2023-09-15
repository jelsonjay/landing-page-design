import "./styles.css";
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = [...document.querySelectorAll(".slide")];
const numberofSlides = slides.length;
let slideNum = 0;

// ============SLIDER NEXT BUTTON=================
nextBtn.onclick = () => {
  slides.forEach((item) => {
    item.classList.remove("active");
  });

  slideNum++;

  if (slideNum > numberofSlides - 1) {
    slideNum = 0;
  }
  slides[slideNum].classList.add("active");
};

// ============SLIDER PREVIEW BUTTON=================
prevBtn.onclick = () => {
  slides.forEach((item) => {
    item.classList.remove("active");
  });

  slideNum--;

  if (slideNum < 0) {
    slideNum = numberofSlides - 1;
  }
  slides[slideNum].classList.add("active");
};
