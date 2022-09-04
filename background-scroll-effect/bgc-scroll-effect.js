"use strict";
// =============================================================
const refs = {
  bgImgRef: document.querySelector("#bg-img"),
};
// =============================================================
window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  refs.bgImgRef.style.opacity = 1 - window.pageYOffset / 900;
  refs.bgImgRef.style.backgroundSize = 250 - window.pageYOffset / 5 + "%";
}
// =============================================================
