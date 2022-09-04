"use strict";
// =============================================================
const refs = {
  btnContainerRef: document.querySelector(".container"),
};
// =============================================================
const KITS = ["crash", "kick", "snare", "tom"];
// =============================================================
KITS.forEach((kit) => {
  const btnRef = document.createElement("button");
  btnRef.classList.add("btn");
  btnRef.style.backgroundImage = "url(./img/" + kit + ".png)";
  btnRef.innerText = kit;
  // ====================
  const audioEl = document.createElement("audio");
  audioEl.src = "sounds/" + kit + ".mp3";
  // ====================
  refs.btnContainerRef.appendChild(audioEl);
  refs.btnContainerRef.appendChild(btnRef);
  // ====================
  btnRef.addEventListener("click", () => {
    audioEl.play();
  });
  // ====================
  window.addEventListener("keydown", (event) => {
    if (event.key === kit.slice(0, 1)) {
      audioEl.play();
      btnRef.style.transform = "scale(.9)";
      setTimeout(() => {
        btnRef.style.transform = "scale(1)";
      }, 100);
    }
  });
});
// =============================================================

// =============================================================
