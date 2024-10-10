const boxesContainer = document.querySelector("#boxes");
const amountInput = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");

buttonCreate.addEventListener("click", () => {
  const amount = amountInput.value;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
});

buttonDestroy.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const newBoxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("new-box");
    box.style.width = `${30 + 10 * newBoxes.length}px`;
    box.style.height = `${30 + 10 * newBoxes.length}px`;
    box.style.backgroundColor = getRandomHexColor();
    newBoxes.push(box);
  }

  boxesContainer.innerHTML = "";
  amountInput.value = "";
  boxesContainer.append(...newBoxes);
}

function destroyBoxes() {
  amountInput.value = "";
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
