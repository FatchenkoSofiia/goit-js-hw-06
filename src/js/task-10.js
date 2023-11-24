function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const controlsDiv = document.getElementById('controls');
const inputNumber = controlsDiv.querySelector('input');
const createButton = controlsDiv.querySelector('[data-create]');
const destroyButton = controlsDiv.querySelector('[data-destroy]');
const boxesDiv = document.getElementById('boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = inputNumber.valueAsNumber;
  const initialSize = 30;
  const sizeIncrement = 10;

  clearBoxes();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const boxSize = initialSize + i * sizeIncrement;

    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesDiv.appendChild(box);
  }
}

function destroyBoxes() {
  clearBoxes();
}

function clearBoxes() {
  boxesDiv.innerHTML = '';
}
