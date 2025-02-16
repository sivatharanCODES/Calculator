"use strict";
//Global variables..
const toggle = document.querySelector(".toggle");
const container = document.querySelector(".container");
const toggleCircle = document.querySelector(".toggle-circle");
const themeIcon = document.querySelector(".fas");
const inputField = document.querySelector(".input-box");
const del = document.querySelector(".control");
const btns = document.querySelectorAll(".con-small");

//Init function...
const init = function () {
  toggle.classList.remove("toggle-dark");
  toggleCircle.classList.remove("tc-dark");
  container.classList.remove("toggled-container");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.remove("toggled-icon");
  inputField.classList.remove("dark-theme-fonts");
  del.classList.remove("control-dark");
  for (const x of btns) {
    x.classList.remove("darken-btns");
  }
  console.log(`init functions executed`);
};

//init funciton call
init();

// Theme switching functionality
const switchTheme = function () {
  toggle.classList.toggle("toggle-dark");
  toggleCircle.classList.toggle("tc-dark");
  container.classList.toggle("toggled-container");
  console.log("toggle clicked");
  themeIcon.classList.toggle("fa-sun");
  themeIcon.classList.toggle("fa-moon");
  themeIcon.classList.toggle("toggled-icon");
  inputField.classList.toggle("dark-theme-input");
  del.classList.toggle("control-dark");
  for (const x of btns) {
    x.classList.contains("pink-btn") || x.classList.toggle("darken-btns");
  }
};

document.querySelector(".toggle").addEventListener("click", function () {
  switchTheme();
});
