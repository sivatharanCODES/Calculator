"use strict";
const toggle = document.querySelector(".toggle");
const container = document.querySelector(".container");
const toggleCircle = document.querySelector(".toggle-circle");
const themeIcon = document.querySelector(".fas");

const init = function () {
  toggle.classList.remove("toggle-dark");
  toggleCircle.classList.remove("tc-dark");
  container.classList.remove("toggled-container");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.remove("toggled-icon");

  console.log(`init functions executed`);
};

init();

document.querySelector(".toggle").addEventListener("click", function () {
  switchTheme();
  //   document.querySelector(".fas").style.color = "rgb(255, 0, 170)";
});

const switchTheme = function () {
  toggle.classList.toggle("toggle-dark");
  toggleCircle.classList.toggle("tc-dark");
  container.classList.toggle("toggled-container");
  console.log("toggle clicked");
  themeIcon.classList.toggle("fa-sun");
  themeIcon.classList.toggle("fa-moon");
  themeIcon.classList.toggle("toggled-icon");
};
