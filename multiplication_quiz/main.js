"use strict";
const refs = {
  inputRef: document.querySelector("#input"),
  submitRef: document.querySelector(".submit-button"),
  resetRef: document.querySelector(".reset-button"),
  scoreRef: document.querySelector("#score"),
  questionRef: document.querySelector("#question"),
  formRef: document.querySelector("#form"),
};

const firstValue = Math.ceil(Math.random() * 10);
const secondValue = Math.ceil(Math.random() * 10);
const correctAnswer = firstValue * secondValue;
let counter = JSON.parse(localStorage.getItem("score"));
if (!counter) {
  counter = 0;
}
refs.scoreRef.innerText = `score: ${counter}`;

refs.questionRef.innerText = `What is ${firstValue} multiplied by  ${secondValue}?`;

refs.formRef.addEventListener("submit", omFormSubmit);
refs.resetRef.addEventListener("click", omFormReset);

function omFormSubmit() {
  const userAnswer = Number(refs.inputRef.value);
  if (userAnswer === correctAnswer) {
    counter += 1;
    updateLocalStorage();

    return;
  }
  counter -= 1;
  updateLocalStorage();
}

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(counter));
}

function omFormReset() {
  localStorage.removeItem("score");
  document.location.reload();
}
