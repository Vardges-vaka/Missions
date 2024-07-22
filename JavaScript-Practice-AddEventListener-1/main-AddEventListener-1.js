let redbg = document.getElementById("red");
let bluebg = document.getElementById("blue");
let greenbg = document.getElementById("green");

redbg.addEventListener("click", function () {
  document.body.style.backgroundColor = "#FF0000";
});

greenbg.addEventListener("click", function () {
  document.body.style.backgroundColor = "#00ff00";
});

bluebg.addEventListener("click", function () {
  document.body.style.backgroundColor = "#0000FF";
});
