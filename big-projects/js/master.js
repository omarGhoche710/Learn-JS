// ============================================================
// Selectors
// ============================================================
const settingBox = document.querySelector(".setting-box");
const settingIcon = settingBox.querySelector(".setting-icon");
const settingIconEl = settingIcon.querySelector(".fa-gear");
const colorListEl = document.querySelector(".color-list");
const landingPage = document.querySelector(".landing-page");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const showBulletsBtn = document.getElementById("show-bullets-btn");
const hideBulletsBtn = document.getElementById("hide-bullets-btn");
const section = document.querySelector(".skills");
const skillListEl = document.querySelector(".skill-list");
const bulletBox = document.querySelector(".nav-bullets");
const linkContainer = document.querySelector(".links");
const ourGalleryBox = document.querySelector(".gallery .images-box");

// ============================================================
// Variables
// ============================================================
const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
let index = 0;
let imageId;
let started = false;

// ============================================================
// Settings Panel
// ============================================================
settingIcon.addEventListener("click", () => {
  settingBox.classList.toggle("open");
  settingIconEl.classList.toggle("fa-spin");
});

// ============================================================
// Color Switcher
// ============================================================
colorListEl.addEventListener("click", (e) => {
  const li = e.target.closest("li");

  if (li) {
    const color = li.dataset.color;
    document.documentElement.style.setProperty("--main-color", color);
    window.localStorage.setItem("color", color);
    handleActive(colorListEl, li);
  }
});

// ============================================================
// Background Image Options
// ============================================================
noBtn.addEventListener("click", () => {
  clearInterval(imageId);
  noBtn.classList.add("active");
  yesBtn.classList.remove("active");
  window.localStorage.setItem("randomBackgroundsOption", "no");
  window.localStorage.setItem("imageIndex", index);
});

yesBtn.addEventListener("click", () => {
  randomBackgrounds();
  yesBtn.classList.add("active");
  noBtn.classList.remove("active");
  window.localStorage.setItem("randomBackgroundsOption", "yes");
});

// ============================================================
// Nav Bullets Options
// ============================================================
showBulletsBtn.addEventListener("click", () => {
  bulletBox.classList.remove("hide");
  showBulletsBtn.classList.add("active");
  hideBulletsBtn.classList.remove("active");
  window.localStorage.setItem("bulletsOption", "show");
});

hideBulletsBtn.addEventListener("click", () => {
  bulletBox.classList.add("hide");
  hideBulletsBtn.classList.add("active");
  showBulletsBtn.classList.remove("active");
  window.localStorage.setItem("bulletsOption", "hide");
});

// ============================================================
// Skills Progress Bar (Triggered on Scroll)
// ============================================================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !started) {
        fillProgressesOnScrolling(skillListEl);
        started = true;
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(section);

// ============================================================
// Gallery Popup
// ============================================================
ourGalleryBox.addEventListener("click", (e) => {
  if (e.target.matches("img")) {
    const overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.classList.add("popup-open");
    createPopup(e.target);
    document.body.append(overlay);
  }
});

document.addEventListener("click", (e) => {
  const popupButton = e.target.closest(".popup-button");

  if (popupButton) {
    popupButton.closest(".popup-container").remove();
    document.querySelector(".popup-overlay").remove();
    document.body.classList.remove("popup-open");
  }
});

// ============================================================
// Navigation (Bullets & Links)
// ============================================================
scrollToSection(bulletBox, "bullet");
scrollToSection(linkContainer, "link", handleActive);

// ============================================================
// Functions
// ============================================================

function initColor() {
  const savedColor = localStorage.getItem("color");
  if (savedColor) {
    document.documentElement.style.setProperty("--main-color", savedColor);
  }
}

function initActiveColorEl() {
  const savedColor = localStorage.getItem("color");
  if (savedColor) {
    colorListEl.querySelectorAll("li").forEach((li) => {
      if (li.dataset.color === savedColor) {
        handleActive(colorListEl, li);
      }
    });
  }
}

function initRandomBackgroundsOption() {
  const randomBackgroundsOption = window.localStorage.getItem("randomBackgroundsOption");

  if (randomBackgroundsOption !== "no") {
    randomBackgrounds();
  } else {
    noBtn.classList.add("active");
    yesBtn.classList.remove("active");
    const savedImageIndex = parseInt(window.localStorage.getItem("imageIndex"));
    landingPage.style.backgroundImage = `url("../images/${images[savedImageIndex]}")`;
  }
}

function initBulletsOption() {
  const bulletsOption = window.localStorage.getItem("bulletsOption");

  if (bulletsOption === "hide") {
    bulletBox.classList.add("hide");
    hideBulletsBtn.classList.add("active");
    showBulletsBtn.classList.remove("active");
  }
}

function fillProgressesOnScrolling(container) {
  container.querySelectorAll(".skill-progress span").forEach((span) => {
    span.style.width = span.dataset.progress;
  });
}

function createPopup(image) {
  const divEl = document.createElement("div");
  const headerEl = document.createElement("h3");
  const buttonEl = document.createElement("button");
  const imageCloned = image.cloneNode(true);

  divEl.className = "popup-container";
  headerEl.className = "popup-header";
  buttonEl.className = "popup-button";

  headerEl.textContent = image.alt;
  buttonEl.textContent = "x";

  divEl.append(headerEl, imageCloned, buttonEl);
  document.body.append(divEl);
}

function randomBackgrounds() {
  if (imageId) clearInterval(imageId);

  imageId = setInterval(() => {
    index = (index + 1) % images.length;
    landingPage.style.backgroundImage = `url("../images/${images[index]}")`;
  }, 3000);
}

function scrollToSection(container, childrenClassName, handleFunc) {
  container.addEventListener("click", (e) => {
    e.preventDefault();
    const childrenEl = e.target.closest(`.${childrenClassName}`);

    if (childrenEl) {
      const sectionEl = document.querySelector(`.${childrenEl.dataset.section}`);
      sectionEl.scrollIntoView({ behavior: "smooth" });
      if (handleFunc) handleFunc(container, childrenEl);
    }
  });
}

function handleActive(container, elClicked) {
  container.querySelector(".active")?.classList.remove("active");
  elClicked.classList.add("active");
}

function resetOptions() {
  localStorage.clear();

  // Reset color
  document.documentElement.style.setProperty("--main-color", "#2196f3");
  handleActive(colorListEl, colorListEl.querySelector("[data-color='#2196f3']"));

  // Reset bullets
  bulletBox.classList.remove("hide");
  showBulletsBtn.classList.add("active");
  hideBulletsBtn.classList.remove("active");

  // Reset backgrounds
  randomBackgrounds();
  yesBtn.classList.add("active");
  noBtn.classList.remove("active");
}

// ============================================================
// Init
// ============================================================
initColor();
initActiveColorEl();
initRandomBackgroundsOption();
initBulletsOption();