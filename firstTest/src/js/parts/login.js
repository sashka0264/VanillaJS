import UserValidator from './UserValidator';
import DateValidator from './DateValidator';
import PasswordValidator from './PasswordValidator';

const login = () => {
  const form = document.getElementById('popupForm');
  const username = form.querySelector('#popup-username');
  const usernameError = form.querySelector('#popup-userError');

  const date = form.querySelector('#popup-date');
  const dateError = form.querySelector('#popup-dateError');

  const password = form.querySelector('#popup-password');
  const passwordError = form.querySelector('#popup-passwordError');

  const userValidator = new UserValidator(username, 3, 35, usernameError, 'popup-content__userError_active');

  const dateValidator = new DateValidator(date, dateError, 'popup-content__dateError_active');
  userValidator.listener();
  dateValidator.listener();

  const passwordValidator = new PasswordValidator(password, passwordError, 'popup-content__passwordError_active', 7);
  passwordValidator.listener();


  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userStatus = userValidator.verify();
    const dateStatus = dateValidator.verify();
    const passwordStatus = passwordValidator.verify();

    console.log(userStatus, dateStatus, passwordStatus);
  });
};

export default login;
