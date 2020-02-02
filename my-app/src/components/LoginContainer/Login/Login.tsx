import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { LoginInputControl, DateInputControl } from '../../../common/FormControl/FormControl';
import {
  required, maxLengthCreator, minLengthCreator, emailValidator,
} from '../../../common/helpers/validators';
import style from './Login.module.css';

const maxLength = maxLengthCreator(35),
  minLength = minLengthCreator(2),
  maxDateLength = maxLengthCreator(10);

interface LoginFormProps {
  handleSubmit: any,
}
// eslint-disable-next-line one-var
const LoginForm: React.FC<LoginFormProps> = ({
  handleSubmit,
}:LoginFormProps) => (
  <div className={style.login}>
    <form onSubmit={handleSubmit} className={style.appLoginBlock}>
      <Field
        name="name"
        placeholder="ФИО"
        component={LoginInputControl}
        validate={[required, minLength, maxLength]}
        className={style.appLoginLog}
      />

      <Field
        name="date"
        component={DateInputControl}
        type="date"
        validate={[required, maxDateLength]}
        className={style.appLoginDate}
      />

      <Field
        name="password"
        placeholder="Пароль"
        component={LoginInputControl}
        type="password"
        validate={[required, minLength, maxLength]}
        className={style.appLoginPassword}
      />

      <Field
        name="email"
        placeholder="Email"
        component={LoginInputControl}
        type="email"
        validate={[emailValidator]}
        className={style.appLoginEmail}
      />

      <button
        type="submit"
        className={style.appLoginButton}
      >
        Войти
      </button>
    </form>
  </div>
);

export default reduxForm({ form: 'login' })(LoginForm);
