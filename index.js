const container = document.querySelector(".container");
let canvas = "";
for (let i = 0; i < 256; i++) {
  canvas += `<div class="cube"></div>`;
}

container.innerHTML = canvas;

document.querySelectorAll(".cube").forEach((cubic) => {
  cubic.addEventListener("mouseenter", changeColor);
  cubic.addEventListener("mousedown", changeColor);
});
let colorPick = "black";
let mouseDown = false;

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

document.querySelector(".btn").addEventListener("click", () => {
  document.querySelectorAll(".cube").forEach((cubic) => {
    cubic.style.backgroundColor = "white";
  });
});

document
  .querySelector("input[type ='color']")
  .addEventListener("change", () => {
    colorPick = document.getElementById("color").value;
  });

function changeColor(e) {
  if (e.type === "mouseenter" && !mouseDown) return;

  e.target.style.backgroundColor = colorPick;
}
