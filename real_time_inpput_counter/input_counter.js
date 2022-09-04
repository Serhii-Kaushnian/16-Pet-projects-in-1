"use strict";
// =============================================================
const refs = {
  textAreaRef: document.querySelector("#textArea"),
  remainRef: document.querySelector(".remain_counter"),
  totalRef: document.querySelector(".total_counter"),
};
// =============================================================
let totalCharacters = 50;
// =============================================================
refs.textAreaRef.addEventListener("keyup", onTextAreaInput);
// =============================================================
function onTextAreaInput() {
  refs.remainRef.innerText = `${
    refs.textAreaRef.getAttribute("maxLength") - refs.textAreaRef.value.length
  }`;
  refs.totalRef.innerText = `${refs.textAreaRef.value.length}`;
}
// =============================================================
onTextAreaInput();
