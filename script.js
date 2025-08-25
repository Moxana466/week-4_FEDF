const form = document.getElementById("myForm");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
const fullnameError = document.getElementById("fullnameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const phoneError = document.getElementById("phoneError");
const successMessage = document.getElementById("successMessage");
// Regex patterns
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/;
const phoneRegex = /^[0-9]{10}$/;
function validateFullname() {
if (fullname.value.trim() === "") {
fullnameError.textContent = "Full Name is required";
fullname.classList.add("invalid");
fullname.classList.remove("valid");
return false;
}
fullnameError.textContent = "";
fullname.classList.add("valid");
fullname.classList.remove("invalid");
return true;
}
function validateEmail() {
if (!emailRegex.test(email.value)) {
emailError.textContent = "Invalid email format";
email.classList.add("invalid");
email.classList.remove("valid");
return false;
}
emailError.textContent = "";
email.classList.add("valid");
email.classList.remove("invalid");
return true;
}
function validatePassword() {
if (!passwordRegex.test(password.value)) {
passwordError.textContent = "Password must be 6+ chars, include number & special char";
password.classList.add("invalid");
password.classList.remove("valid");
return false;
}
passwordError.textContent = "";
password.classList.add("valid");
password.classList.remove("invalid");
return true;
}
email.classList.add("invalid");
email.classList.remove("valid");
return false;
}
emailError.textContent = "";
email.classList.add("valid");
email.classList.remove("invalid");
return true;
}
function validatePassword() {
if (!passwordRegex.test(password.value)) {
passwordError.textContent = "Password must be 6+ chars, include number & special char";
password.classList.add("invalid");
password.classList.remove("valid");
return false;
}
passwordError.textContent = "";
password.classList.add("valid");
password.classList.remove("invalid");
return true;
}
successMessage.textContent = "";
}
});