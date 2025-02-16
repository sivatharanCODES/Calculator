document.querySelector(".toggle").addEventListener("click", function () {
  document.querySelector(".toggle").classList.toggle("toggle-dark");
  document.querySelector(".toggle-circle").classList.toggle("tc-dark");
  document.querySelector(".container").classList.toggle("toggled-container");
  //   document.querySelector(".toggle").style.justifyContent = "flex-start";
  //   document.querySelector(".container").style.backgroundColor = "black";
  console.log("toggle clicked");

  document.querySelector(".fas").classList.toggle("fa-sun");
  document.querySelector(".fas").classList.toggle("fa-moon");
  document.querySelector(".fas").classList.toggle("toggled-icon");
  //   document.querySelector(".fas").style.color = "rgb(255, 0, 170)";
});
