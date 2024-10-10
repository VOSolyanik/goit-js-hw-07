const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { email, password } = event.target.elements;

  const data = {
	email: email.value.trim(),
	password: password.value.trim(),
  };

  if (data.email === "" || data.password === "") {
    alert("All form fields must be filled in");
  } else {
    console.log(data);
    loginForm.reset();
  }
}