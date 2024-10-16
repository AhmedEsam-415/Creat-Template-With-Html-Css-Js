//* Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color");

if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color", mainColors);

  //* Remove Active Class From All Color List Item
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    //* Add Active Class On Element With Data-Color === Local Storage Item
    if (element.dataset.color === mainColors) {
      element.classList.add("active");
    }
  });
}

//* Toggle Spin Class On Icon
let toggleOpen = document.querySelector(".setting-box");
let toggle = document.querySelector(".toggle-setting .fa-gear");

toggle.onclick = function () {
  //* Toggle Class Fa-spin For Rotation On Self
  this.classList.toggle("fa-spin");
  //* Toggle Class Open On Main Setting Box
  toggleOpen.classList.toggle("open");
};

//* Switch Colors
const colorsli = document.querySelectorAll(".colors-list li");
//* Loop On All List Items
colorsli.forEach((li) => {
  //* Click On Every List Item
  li.addEventListener("click", (e) => {
    //* Set Color On Root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    //* Set Color On localStorage
    localStorage.setItem("color", e.target.dataset.color);

    //* Remove Active Class From All Children
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    //* Add Active Class On Self
    e.target.classList.add("active");
  });
});

//* Switch Ramndom BackGround Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

//* Random Background Option
let backgroundOption = true;

//* Variable To Control The Background Interval
let backgroundInterval;

//* Loop On All Span
randomBackEl.forEach((span) => {
  //* Click On Every span
  span.addEventListener("click", (e) => {
    //* Remove Active Class From All Span
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    //* Add Active Class On Self
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      RandomizImgs();
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
    }
  });
});

//* Select Landing Page Element
let Landingpage = document.querySelector(".landing-page");

//* Get Array Of Imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

//* Function To Randomiz Imgs
function RandomizImgs() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      //* Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);

      //* Change Background Img Url
      Landingpage.style.backgroundImage = `url("Imgs/${imgsArray[randomNumber]}")`;
    }, 1000);
  }
}
RandomizImgs();
