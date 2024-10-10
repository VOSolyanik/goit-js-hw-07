function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleChangeColorClick() {
  const colorSpan = document.querySelector(".color");
  const color = getRandomHexColor();
  
  document.body.style.backgroundColor = color;
  colorSpan.textContent = color;
}

const changeColorButton = document.querySelector(".change-color");

changeColorButton.addEventListener("click", handleChangeColorClick);
