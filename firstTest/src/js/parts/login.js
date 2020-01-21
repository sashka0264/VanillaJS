import UserValidator from './validators/UserValidator';
import DateValidator from './validators/DateValidator';
import PasswordValidator from './validators/PasswordValidator';
import EmailValidator from './validators/EmailValidator';

const login = () => {
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо. Мы с Вами свяжемся.',
    failure: 'Произошла ошибка. Пожалуйста, повторите попытку позже.',
  };

  const form = document.getElementById('popupForm');
  const username = form.querySelector('#popup-username');
  const usernameError = form.querySelector('#popup-userError');

  const date = form.querySelector('#popup-date');
  const dateError = form.querySelector('#popup-dateError');

  const password = form.querySelector('#popup-password');
  const passwordError = form.querySelector('#popup-passwordError');

  const userValidator = new UserValidator(username, usernameError, 'popup-content__userError_active', 3, 31);

  const dateValidator = new DateValidator(date, dateError, 'popup-content__dateError_active');
  userValidator.listener();
  dateValidator.listener();

  const passwordValidator = new PasswordValidator(password, passwordError, 'popup-content__passwordError_active', 7);
  passwordValidator.listener();

  const email = form.querySelector('#popup-email');
  const emailError = form.querySelector('#popup-emailError');
  const emailValidator = new EmailValidator(email, emailError, 'popup-content__emailError_active');
  emailValidator.listener();

  const formMessage = form.querySelector('#popup-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userStatus = userValidator.verify();
    const dateStatus = dateValidator.verify();
    const passwordStatus = passwordValidator.verify();
    const emailStatus = emailValidator.verify();

    if (userStatus && dateStatus && passwordStatus && emailStatus) {
      const formData = new FormData(e.target);

      const body = {};
      formData.forEach((item, i) => {
        body[i] = item;
      });
      const del = () => setTimeout(() => {
        formMessage.classList.remove('popup-content__message_active');
      }, 4000);


      fetch('server.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
        .then((res) => {
          if (res.status === 200) {
            formMessage.classList.add('popup-content__message_active');
            userValidator.status = false;
            dateValidator.status = false;
            passwordValidator.status = false;
            emailValidator.status = false;

            for (const el of form) el.tagName === "INPUT" && (el.value = "");
            formMessage.textContent = message.success;
            del();
          } else {
            throw new Error('status network not 200');
          }
        })
        .catch(() => {
          formMessage.textContent = message.failure;
          del();
        });
    }
  });
};

export default login;
