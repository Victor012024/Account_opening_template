let firstName = document.getElementById("firstName");
let middleName = document.getElementById("middleName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let pwd = document.getElementById("password");
let conPwd = document.getElementById("ConfirmPassword");
let message = document.getElementById("message");
let age = document.getElementById("age");

function validateInput() {
  let errorMessage = "";

  if (
    firstName.value.trim() === "" ||
    middleName.value.trim() === "" ||
    lastName.value.trim() === ""
  ) {
    errorMessage += "Name fields are incomplete.<br>";
  }

  if (pwd.value.trim() === "") {
    errorMessage += "Password is missing.<br>";
  }

  if (conPwd.value.trim() === "") {
    errorMessage += "Confirm Password is missing.<br>";
  } else if (pwd.value.trim() !== conPwd.value.trim()) {
    errorMessage += "Passwords do not match.<br>";
  }

  if (!isValidEmail(email.value.trim())) {
    errorMessage += "Invalid email address.<br>";
  }

  age.addEventListener("input", function (e) {
    let value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
    if (value.length > 5) value = value.slice(0, 5) + "/" + value.slice(5);
    e.target.value = value;
  });

  if (errorMessage) {
    message.innerHTML = errorMessage;

    message.classList.add("show");
  } else {
    message.classList.remove("show");
    alert("Completed!");
  }
  firstName.value = "";
  middleName.value = "";
  lastName.value = "";
  email.value = "";
  pwd.value = "";
  conPwd.value = "";
  age.value = "";

}



document.getElementById("submitForm").addEventListener("click", (e) => {
  validateInput();
  if (message.innerHTML.trim() !== "") {
    e.preventDefault();
  }
});

function isValidEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
