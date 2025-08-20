const form = document.getElementById("signupForm");

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passField = document.getElementById("password");
const confirmPassField = document.getElementById("confirmPassword");

const nameMsg = document.getElementById("nameError");
const emailMsg = document.getElementById("emailError");
const passMsg = document.getElementById("passwordError");
const confirmPassMsg = document.getElementById("confirmPasswordError");

const nameTick = document.getElementById("nameCheck");
const emailTick = document.getElementById("emailCheck");
const passTick = document.getElementById("passwordCheck");
const confirmPassTick = document.getElementById("confirmPasswordCheck");

const passStrength = document.getElementById("strengthBar");

function delay(fn, time = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), time);
  };
}

function showError(field, message, msgBox, tickIcon) {
  field.classList.add("error");
  field.classList.remove("success");
  msgBox.textContent = message;
  msgBox.style.opacity = "1";
  tickIcon.style.opacity = "0";
}

function showSuccess(field, msgBox, tickIcon) {
  field.classList.remove("error");
  field.classList.add("success");
  msgBox.style.opacity = "0";
  tickIcon.style.opacity = "1";
}

// Validations
const checkName = delay(() => {
  const value = nameField.value.trim();
  if (value.length < 3) {
    showError(nameField, "Name must be at least 3 characters", nameMsg, nameTick);
  } else {
    showSuccess(nameField, nameMsg, nameTick);
  }
});

const checkEmail = delay(() => {
  const value = emailField.value.trim();
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(value)) {
    showError(emailField, "Enter a valid email", emailMsg, emailTick);
  } else {
    showSuccess(emailField, emailMsg, emailTick);
  }
});

function updatePassStrength(pass) {
  let score = 0;
  if (pass.length >= 8) score++;
  if (/[A-Z]/.test(pass)) score++;
  if (/[a-z]/.test(pass)) score++;
  if (/[0-9]/.test(pass)) score++;
  if (/[^A-Za-z0-9]/.test(pass)) score++;

  const colors = ["#ccc", "#e74c3c", "#e67e22", "#f1c40f", "#2ecc71"];
  const widths = ["0", "20%", "40%", "70%", "100%"];

  passStrength.style.width = widths[score];
  passStrength.style.backgroundColor = colors[score];
}

const checkPassword = delay(() => {
  const value = passField.value.trim();
  updatePassStrength(value);
  if (value.length < 8) {
    showError(passField, "Password must be at least 8 characters", passMsg, passTick);
  } else {
    showSuccess(passField, passMsg, passTick);
  }
});

const checkConfirmPassword = delay(() => {
  if (confirmPassField.value.trim() !== passField.value.trim()) {
    showError(confirmPassField, "Passwords do not match", confirmPassMsg, confirmPassTick);
  } else {
    showSuccess(confirmPassField, confirmPassMsg, confirmPassTick);
  }
});

nameField.addEventListener("input", checkName);
emailField.addEventListener("input", checkEmail);
passField.addEventListener("input", checkPassword);
confirmPassField.addEventListener("input", checkConfirmPassword);

// Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkName();
  checkEmail();
  checkPassword();
  checkConfirmPassword();

  if (
    nameField.classList.contains("success") &&
    emailField.classList.contains("success") &&
    passField.classList.contains("success") &&
    confirmPassField.classList.contains("success")
  ) {
    alert("Form submitted successfully!");
    window.location.reload(); 
  }
});
