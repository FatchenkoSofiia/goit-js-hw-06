const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onClickButtonHandler = () => {
  let currentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = currentColor;
  spanEl.textContent = currentColor;
};
buttonEl.addEventListener("click", onClickButtonHandler);