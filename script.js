// DOM Elements
const form = document.querySelector('.form');
const userName = form.querySelector('#username');
const userEmail = form.querySelector('#email');
const userPassword = form.querySelector('#password');
const userPassConfirm = form.querySelector('#password2');

// Functions
// Check Input
const checkInput = (inputArr) => {
  for (const input of inputArr) {
    if (!input.inputEl.value.trim()) {
      showError(input.inputEl, input.message);
    } else if (
      input.checkEmail === true &&
      !validateEmail(input.inputEl.value.trim())
    ) {
      showError(input.inputEl, 'Invalid Email');
    } else {
      showSuccess(input.inputEl);
    }
  }
};

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

  checkInput([
    { inputEl: userName, message: 'Username Required' },
    { inputEl: userEmail, message: 'User Email Required', checkEmail: true },
    { inputEl: userPassword, message: 'Password Required' },
    { inputEl: userPassConfirm, message: 'Password Confirmation Required' },
  ]);
});
