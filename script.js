// DOM Elements
const form = document.querySelector('.form');
const userName = form.querySelector('#username');
const userEmail = form.querySelector('#email');
const userPassword = form.querySelector('#password');
const userPassConfirm = form.querySelector('#password2');

// Functions
// Input - Error
const showError = (inputEl, message) => {
  inputEl.nextElementSibling.textContent = message;
  inputEl.parentElement.classList.remove('success');
  inputEl.parentElement.classList.add('error');
};

// Input - Success
const showSuccess = (inputEl) => {
  inputEl.parentElement.classList.remove('error');
  inputEl.parentElement.classList.add('success');
};

// Email Validation
const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Event listeners
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!userName.value) {
    showError(userName, 'Username Required');
  } else {
    showSuccess(userName);
  }

  if (!userEmail.value) {
    showError(userEmail, 'User Email Required');
  } else if (!validateEmail(userEmail.value)) {
    showError(userEmail, 'Invalid Email');
  } else {
    showSuccess(userEmail);
  }

  if (!userPassword.value) {
    showError(userPassword, 'Password Required');
  } else {
    showSuccess(userPassword);
  }

  if (!userPassConfirm.value) {
    showError(userPassConfirm, 'Password Confirmation Required');
  } else {
    showSuccess(userPassConfirm);
  }
});
