const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const element = event.target;
  const value = element.value.trim();
  
  if (!value) {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = value;
  }
});