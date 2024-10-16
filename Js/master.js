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
  });
});

//* Select Landing Page Element
let Landingpage = document.querySelector(".landing-page");
//* Get Array Of Imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
setInterval(() => {
  //* Get Random Number
  let randomNumber = Math.floor(Math.random() * imgsArray.length);

  //* Change Background Img Url
  Landingpage.style.backgroundImage = `url("Imgs/${imgsArray[randomNumber]}")`;
}, 5000);
