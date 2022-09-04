"use strict";
// =============================================================
const refs = {
  buttonRippleHoverRef: document.querySelector(".button"),
};
// =============================================================

refs.buttonRippleHoverRef.addEventListener("mouseover", rippleHoverEffectFunc);
// =============================================================
function rippleHoverEffectFunc(event) {
  const xPosition = event.pageX - refs.buttonRippleHoverRef.offsetLeft;
  const yPosition = event.pageY - refs.buttonRippleHoverRef.offsetTop;
  refs.buttonRippleHoverRef.style.setProperty("--xPos", `${xPosition}px`);
  refs.buttonRippleHoverRef.style.setProperty("--yPos", `${yPosition}px`);
  console.log(xPosition, yPosition);
}
// =============================================================
