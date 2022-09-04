"use strict";
// =============================================================
const refs = {
  openBtnRef: document.querySelector(".open_button"),
  closeBtnRef: document.querySelector(".close_button"),
  trailerRef: document.querySelector(".trailer"),
  videoRef: document.querySelector(".video"),
};
// =============================================================
document.body.addEventListener("click", onVideoPlay);
// =============================================================
function onVideoPlay(event) {
  if (event.target.classList.contains("open_button")) {
    refs.trailerRef.classList.remove("active");
  } else if (event.target.classList.contains("close_button")) {
    refs.trailerRef.classList.add("active");
    refs.videoRef.pause();
  }
}
// =============================================================
