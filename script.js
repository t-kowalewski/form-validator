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

// Input - Check Required
const checkRequired = (inputArr) => {
  for (const input of inputArr) {
    if (!input.inputEl.value.trim()) {
      showError(input.inputEl, input.errMessage);
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

// Email Validation
const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Length Validation
const validateLength = (inputArr) => {
  for (const input of inputArr) {
    if (input.inputEl.value && input.inputEl.value.length < input.minLength) {
      showError(
        input.inputEl,
        `${input.inputEl.previousElementSibling.textContent} should be at least ${input.minLength} characters`
      );
    } else if (input.inputEl.value.length > input.maxLength) {
      showError(
        input.inputEl,
        `${input.inputEl.previousElementSibling.textContent} should be less then ${input.maxLength} characters`
      );
    }
  }
};

// Password Match Validation
const passwordsMatch = (passwd, passwdConfirm) => {
  if (passwd.value !== passwdConfirm.value && passwdConfirm.value) {
    showError(passwdConfirm, "Password doesn't match");
  } else {
    validateLength([{ inputEl: passwdConfirm, minLength: 6, maxLength: 25 }]);
  }
};

// Event listeners
form.addEventListener('submit', (event) => {
  event.preventDefault();

  checkRequired([
    { inputEl: userName, errMessage: 'Username Required' },
    { inputEl: userEmail, errMessage: 'User Email Required', checkEmail: true },
    { inputEl: userPassword, errMessage: 'Password Required' },
    { inputEl: userPassConfirm, errMessage: 'Password Confirmation Required' },
  ]);

  validateLength([
    { inputEl: userName, minLength: 3, maxLength: 4 },
    { inputEl: userPassword, minLength: 6, maxLength: 25 },
  ]);

  passwordsMatch(userPassword, userPassConfirm);
});
