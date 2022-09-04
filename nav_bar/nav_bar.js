"use strict";
// =============================================================
const refs = {
  navRef: document.querySelector(".nav"),
  bottomSectionRef: document.querySelector(".bottom_section"),
};
// =============================================================
window.addEventListener("scroll", onNAvBGCChange);
// =============================================================
function onNAvBGCChange() {
  if (
    window.scrollY >
    refs.bottomSectionRef.offsetTop - refs.navRef.offsetHeight - 50
  ) {
    refs.navRef.classList.add("active");
  } else {
    refs.navRef.classList.remove("active");
  }
}
// =============================================================
