import UserValidator from './validators/UserValidator';
import DateValidator from './validators/DateValidator';
import PasswordValidator from './validators/PasswordValidator';
import EmailValidator from './validators/EmailValidator';

const login = () => {
  const message = {
      loading: 'Загрузка...',
      success: 'Спасибо. Мы с Вами свяжемся.',
      failure: 'Произошла ошибка. Пожалуйста, повторите попытку позже.',
    },
    form = document.getElementById('popupForm'),
    username = form.querySelector('#popup-username'),
    usernameError = form.querySelector('#popup-userError'),
    date = form.querySelector('#popup-date'),
    dateError = form.querySelector('#popup-dateError'),
    password = form.querySelector('#popup-password'),
    passwordError = form.querySelector('#popup-passwordError'),
    email = form.querySelector('#popup-email'),
    emailError = form.querySelector('#popup-emailError'),
    formMessage = form.querySelector('#popup-message'),
    emailValidator = new EmailValidator(email, emailError, 'popup-content__emailError_active'),
    userValidator = new UserValidator(username, usernameError, 'popup-content__userError_active', 3, 31),
    dateValidator = new DateValidator(date, dateError, 'popup-content__dateError_active'),
    passwordValidator = new PasswordValidator(password, passwordError, 'popup-content__passwordError_active', 7);

  userValidator.listener();
  dateValidator.listener();
  passwordValidator.listener();
  emailValidator.listener();

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userStatus = userValidator.verify(),
      dateStatus = dateValidator.verify(),
      passwordStatus = passwordValidator.verify(),
      emailStatus = emailValidator.verify();

    if (userStatus && dateStatus && passwordStatus && emailStatus) {
      const formData = new FormData(e.target),
        body = {},
        del = () => setTimeout(() => {
          formMessage.classList.remove('popup-content__message_active');
        }, 4000);

      formData.forEach((item, i) => {
        body[i] = item;
      });


      fetch('server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
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
