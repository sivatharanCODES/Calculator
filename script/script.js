document.querySelector(".toggle").addEventListener("click", function () {
  document.querySelector(".toggle").classList.toggle("toggle-dark");
  document.querySelector(".toggle-circle").classList.toggle("tc-dark");
  document.querySelector(".container").classList.toggle("toggled-container");
  //   document.querySelector(".toggle").style.justifyContent = "flex-start";
  //   document.querySelector(".container").style.backgroundColor = "black";
  console.log("toggle clicked");
});
