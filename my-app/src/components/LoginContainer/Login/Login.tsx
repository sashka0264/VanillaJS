/* eslint-disable one-var */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { LoginInputControl, DateInputControl } from '../../../common/FormControl/FormControl';
import style from './Login.module.css';
import {
  required, maxLengthCreator, minLengthCreator, emailValidator,
} from '../../../common/helpers/validators';

const maxLength = maxLengthCreator(35),
  minLength = minLengthCreator(2),
  maxDateLength = maxLengthCreator(10);

const LoginForm = ({ handleSubmit }:any) => (
  <div className={style.login}>
    <form onSubmit={handleSubmit} className={style.appLoginBlock}>
      <Field
        name="name"
        className={style.appLoginLog}
        component={LoginInputControl}
        placeholder="ФИО"
        validate={[required, maxLength, minLength]}
      />

      <Field
        name="date"
        className={style.appLoginDate}
        component={DateInputControl}
        type="date"
        validate={[required, maxDateLength]}
      />

      <Field
        name="password"
        className={style.appLoginPassword}
        component={LoginInputControl}
        placeholder="Пароль"
        type="password"
        validate={[required, maxLength, minLength]}
      />

      <Field
        name="email"
        type="email"
        className={style.appLoginEmail}
        component={LoginInputControl}
        placeholder="Email"
        validate={[emailValidator]}
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
