const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 8000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".active-slide");
  //Remove current class
  current.classList.remove("active-slide");

  //Check for next slide
  if (current.nextElementSibling) {
    //Add current to next slide
    current.nextElementSibling.classList.add("active-slide");
  } else {
    //Add current to first slide
    slides[0].classList.add("active-slide");
  }

  setTimeout(() => current.classList.remove("active-slide"));
};

const prevSlide = () => {
  const current = document.querySelector(".active-slide");
  //Remove current class
  current.classList.remove("current");

  //Check for previous slide
  if (current.previousElementSibling) {
    //Add current to previous slide
    current.previousElementSibling.classList.add("active-slide");
  } else {
    //Add current to last slide
    slides[slides.length - 1].classList.add("active-slide");
  }

  setTimeout(() => current.classList.remove("active-slide"));
};

//Button events
next.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    //Run next slide at interval
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", (e) => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    //Run next slide at interval
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

//Auto slide
if (auto) {
  //Run next slide at interval
  slideInterval = setInterval(nextSlide, intervalTime);
}
