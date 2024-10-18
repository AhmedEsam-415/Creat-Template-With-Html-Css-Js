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

    handleActive(e);
  });
});

//* Switch Ramndom BackGround Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

//* Random Background Option
let backgroundOption = true;

//* Variable To Control The Background Interval
let backgroundInterval;

//* Check If There's Local Storage Random Background Item
let backgroundItem = localStorage.getItem("background_option");

//* Check If Random Background Local Storage Is Not Empty
if (backgroundItem !== null) {
  if (backgroundItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }
  //* Remove Active Class From All Spans
  document.querySelectorAll(".random-backgrounds span").forEach((e) => {
    e.classList.remove("active");
  });

  if (backgroundItem === "true") {
    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    document.querySelector(".random-backgrounds .No").classList.add("active");
  }
}

//* Loop On All Span
randomBackEl.forEach((span) => {
  //* Click On Every span
  span.addEventListener("click", (e) => {
    handleActive(e);

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      RandomizImgs();
      localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background_option", false);
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

//* Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  //* Skills OffSet Top
  let skillsOffsetTop = ourSkills.offsetTop;

  //* Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  //* Window Height
  let windowHeight = window.innerHeight;

  //* window ScrollTop
  let windowScrollTop = window.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );

    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

//* Creat Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Creat OverLay Element
    let overLay = document.createElement("div");

    // Add Class To OverLay
    overLay.className = "popup-overlay";

    // Apend OverLay To The Body
    document.body.appendChild(overLay);

    // Creat The Popup
    let popupBox = document.createElement("div");

    // Add Class To popupbox
    popupBox.className = "popup-box";

    if (img.alt !== null) {
      // Creat Heading
      let imgHeading = document.createElement("h3");

      // Creat Text For Heading
      let imgText = document.createTextNode(img.alt);

      //Append The Text To The Heading
      imgHeading.appendChild(imgText);

      // Append The Text Heading To The Popup Box
      popupBox.appendChild(imgHeading);
    }

    // Creat The Image
    let popupImg = document.createElement("img");

    // Set img Src
    popupImg.src = img.src;

    // Add Image To PopupBox
    popupBox.appendChild(popupImg);

    // append The Popup Box To The Body
    document.body.appendChild(popupBox);

    // Creat The Close Span
    let closeButton = document.createElement("span");

    // Creat The Close Button Text
    let closeButtonText = document.createTextNode("X");

    // Append Text To CloseButton
    closeButton.appendChild(closeButtonText);

    // Add Class To CloseButton
    closeButton.className = "closeButton";

    // Add closeButton To Popup-box
    popupBox.appendChild(closeButton);
  });
});

// Close popup
document.addEventListener("click", function (e) {
  if (e.target.classList == "closeButton") {
    // Remove The Current Popup
    e.target.parentElement.remove();

    // Remove OverLay
    document.querySelector(".popup-overlay").remove();
  }
});

// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullets");

// Select All links
const alllinks = document.querySelectorAll(".landing-page .links a");

function scrolltoSomeWhere(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrolltoSomeWhere(allBullets);
scrolltoSomeWhere(alllinks);

// Handel Active State
function handleActive(ev) {
  //* Remove Active Class From All Children
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });

  //* Add Active Class On Self
  ev.target.classList.add("active");
}

let bulletsSpan = document.querySelectorAll(".bullets-Optional span");
let bulletsContainer = document.querySelector(".nav-bullets");
let bulletLocalItem = localStorage.getItem("bullets-option");

if (bulletLocalItem !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });
  if (bulletLocalItem === "show") {
    bulletsContainer.style.display = "block";
    document.querySelector(".bullets-Optional .yes").classList.add("active");
  } else {
    bulletsContainer.style.display = "none";
    document.querySelector(".bullets-Optional .No").classList.add("active");
  }
}n

bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display == "show") {
      bulletsContainer.style.display = "block";
      localStorage.setItem("bullets-option", e.target.dataset.display);
    } else {
      bulletsContainer.style.display = "none";
      localStorage.setItem("bullets-option", e.target.dataset.display);
    }
    handleActive(e);
  });
});
