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
if (next) {
  next.addEventListener("click", (e) => {
    nextSlide();
    if (auto) {
      clearInterval(slideInterval);
      //Run next slide at interval
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  });
}

if (prev) {
  prev.addEventListener("click", (e) => {
    prevSlide();
    if (auto) {
      clearInterval(slideInterval);
      //Run next slide at interval
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  });
}

//Auto slide
if (auto) {
  //Run next slide at interval
  slideInterval = setInterval(nextSlide, intervalTime);
}

// End Slider
const inputLeft = document.querySelector("#input-left");
const inputRight = document.querySelector("#input-right");

const thumbLeft = document.querySelector(".slider > .thumb.left");
const thumbRight = document.querySelector(".slider > .thumb.right");
const range = document.querySelector(".slider > .range");

const minPrice = document.querySelector("#min-price");
const maxPrice = document.querySelector("#max-price");

const setLeftValue = () => {
  const _this = inputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

  const percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
  minPrice.innerHTML = percent + "%";
};

const setRightValue = () => {
  const _this = inputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

  const percent = ((_this.value - min) / (max - min)) * 100;

  thumbRight.style.right = 100 - percent + "%";
  range.style.right = 100 - percent + "%";
  maxPrice.innerHTML = percent + "%";
};

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

// const query = `
//   mutation {
//     registerUser(
//       input:
//       {email: "baba@gmail.com", firstName: "baba", lastName: "krys", passwordfield: "babahimself",
//       passwordfieldConfirmation: "babahimself", username: "babahimself"}
//       )
//     {
//       email
//       firstName
//       lastName

//     }
//   }
// `;
// const url = "https://shelfvibe.com/api/graphql/";
// const opts = {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ query }),
// };
// fetch(url, opts)
//   .then((res) => res.json())
//   .then(console.log)
//   .catch(console.error);
