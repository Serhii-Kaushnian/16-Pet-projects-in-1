"use strict";
// =============================================================
const refs = {
  containerRef: document.querySelector(".container"),
};
// =============================================================
const amountOfEl = 20;
// =============================================================
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// =============================================================
function createDivEl() {
  let accum = "";
  for (let index = 0; index < amountOfEl; index++) {
    const randomColor = getRandomHexColor();
    accum += `<div class="card">
			<div class="color_container" style="background-color: ${randomColor}; font-size: 46px;">${randomColor}</div>
		</div>`;
  }
  refs.containerRef.insertAdjacentHTML("beforeend", accum);

  let cards = [...document.querySelectorAll(".card")];
  // =============================================================
  cards.forEach((el) => {
    el.addEventListener("mousemove", fCardRotate);
    el.addEventListener("mouseout", fCardDefault);
  });
}
// =============================================================
createDivEl();
// =============================================================
function fCardRotate(ev) {
  const selectedDivEL = this.firstElementChild;
  selectedDivEL.style.transform = `perspective(2000px) rotatey(${
    (ev.offsetX - this.offsetWidth / 2) / 6
  }deg) rotatex(${((ev.offsetY - this.offsetHeight / 2) / 6) * -1}deg)`;
}
// =============================================================
function fCardDefault() {
  this.firstElementChild.style.transform = ``;
}
// =============================================================
window.addEventListener("scroll", checkPosition);
window.addEventListener("resize", checkPosition);

async function checkPosition() {
  const height = document.body.offsetHeight;
  const screenHeight = window.innerHeight;

  const scrolled = window.scrollY;
  const pointLoadingContent = height - screenHeight / 4;

  const position = scrolled + screenHeight;

  if (position >= pointLoadingContent) {
    createDivEl();
  }
}
// =============================================================
