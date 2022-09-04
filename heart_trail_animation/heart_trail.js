"use strict";
// =============================================================
const refs = {
  bodyRef: document.querySelector("body"),
};
// =============================================================

refs.bodyRef.addEventListener("mousemove", heartTrailFunc);
// =============================================================
function heartTrailFunc(event) {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 20;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  refs.bodyRef.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
}
// =============================================================
