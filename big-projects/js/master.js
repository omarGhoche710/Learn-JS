// Toggle Setting Box
const settingBox = document.querySelector(".setting-box");
const settingIcon = settingBox.querySelector(".setting-icon");
const settingIconEl = settingIcon.querySelector(".fa-gear");

settingIcon.addEventListener("click", () => {
  settingBox.classList.toggle("open");
  settingIconEl.classList.toggle("fa-spin");
});

// Change Background Image of Landing Page
const landingPage = document.querySelector(".landing-page");

const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
let index = 0;

setInterval(() => {
  index++;

  if(index >= images.length){
    index = 0;
  }

  landingPage.style.backgroundImage = `url("../images/${images[index]}")`;

},10000);



