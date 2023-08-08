"use strict";

const headerBtn = document.querySelector(".header__btn");
const homesSection = document.querySelector(".homes");
const homeBtn = document.querySelectorAll(".home__btn");
const realtorsList = document.querySelector(".realtors__list");
const realtorsImg = document.querySelectorAll(".realtors__img");
const feature = document.querySelector(".features");
const logoImg = document.querySelector(".header__seenon-logos").childNodes;

headerBtn.addEventListener("click", () => {
  homesSection.scrollIntoView({ behavior: "smooth" });
});

homeBtn.forEach((home) =>
  home.addEventListener("click", () => {
    realtorsList.scrollIntoView({ behavior: "smooth" });
  })
);

realtorsImg.forEach((realtor) => {
  realtor.addEventListener("mouseenter", (e) => {
    e.target.style.transform = "scale(1.2)";
    e.target.style.transition = "all .2s ease-in";
    e.target.style.cursor = "pointer";
  });
});

realtorsImg.forEach((realtor) => {
  realtor.addEventListener("mouseleave", (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.transition = "all .2s ease-in-out";
  });
});

const obsFn = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  feature.style.opacity = "1";
  feature.style.transform = "translateY(-20px)";
  feature.style.transition = "all .2s ease-in-out";
  observer.unobserve(feature);
};

const obsOptions = {
  root: null,
  threshold: 0.15,
};

const observer = new IntersectionObserver(obsFn, obsOptions);

observer.observe(feature);

logoImg.forEach((logo) => {
  logo.addEventListener("mouseenter", () => {
    logo.style.filter = "brightness(100%)";
  });
});

logoImg.forEach((logo) => {
  logo.addEventListener("mouseleave", () => {
    logo.style.filter = "brightness(70%)";
  });
});

