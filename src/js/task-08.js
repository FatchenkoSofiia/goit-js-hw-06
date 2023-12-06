const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", submitHundler);

function submitHundler(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  // console.log(email.value, password.value);

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
  }

  const userLoginDetails = { email: email.value, Password: password.value };

  console.log(userLoginDetails);
  event.currentTarget.reset();
}