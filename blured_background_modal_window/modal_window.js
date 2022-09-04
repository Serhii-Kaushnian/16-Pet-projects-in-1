"use strict";
// =============================================================
const refs = {
  openModalButtonRef: document.querySelector(".button"),
  closeModalButtonRef: document.querySelector(".modal_close-button"),
  containerRef: document.querySelector(".container"),
  modalWindowRef: document.querySelector(".modal_container"),
};
// =============================================================
refs.openModalButtonRef.addEventListener("click", modalOpenHandler);
refs.closeModalButtonRef.addEventListener("click", modalCloseHandler);
// =============================================================
function modalOpenHandler() {
  refs.containerRef.classList.add("active");
  refs.modalWindowRef.classList.remove("active");
}
// =============================================================
function modalCloseHandler() {
  refs.containerRef.classList.remove("active");
  refs.modalWindowRef.classList.add("active");
}
// =============================================================
