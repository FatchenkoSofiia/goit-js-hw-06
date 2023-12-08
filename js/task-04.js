let counterValue = 0;

const decrement = document.querySelector(` [data-action="decrement"]`);
const increment = document.querySelector(`[data-action="increment"]`);
const displayValue = document.querySelector("#value");

decrement.addEventListener("click", onButtonDecrementClick);
increment.addEventListener("click", onButtonIncrementClick);

function onButtonDecrementClick(event) {
  console.log((counterValue -= 1));
  displayValue.textContent = counterValue;
}
function onButtonIncrementClick(event) {
  console.log((counterValue += 1));
  displayValue.textContent = counterValue;
}