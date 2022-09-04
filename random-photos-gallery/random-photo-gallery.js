"use strict";
// =============================================================
const refs = {
  btnRef: document.querySelector(".btn"),
  imageContainerRef: document.querySelector(".img__container"),
};
// =============================================================
refs.btnRef.addEventListener("click", loadMore);
// =============================================================
let counter = 5;
// =============================================================
function loadMore() {
  for (let index = 0; index < 4; index++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    refs.imageContainerRef.appendChild(newImgEl);
  }
}
// =============================================================
