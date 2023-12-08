const validInput = document.querySelector("#validation-input");
const lengthNumber = Number(validInput.getAttribute("data-length"));

function checkLengthNumberFunction(event) {
  if (event.currentTarget.value.length === lengthNumber) {
    validInput.classList.remove("invalid");
    validInput.classList.add("valid");
  } else {
    validInput.classList.remove("valid");
    validInput.classList.add("invalid");
  }
}
validInput.addEventListener("blur", checkLengthNumberFunction);