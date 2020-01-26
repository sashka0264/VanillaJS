import React from 'react'
import style from './Login.module.css';
import {connect} from "react-redux";
import {reduxForm, Field} from "redux-form";

const maxLength = maxLengthCreator(30), 
    minLength = minLengthCreator(2);

const LoginForm = ({handleSubmit, error}:any) => {
  return (
    <form onSubmit={handleSubmit} className={style.appLoginBlock}>
      <Field name="email"
        className={style.appLoginLog} 
        component={LoginInputControl}
        placeholder="Логин"
        validate={[required, maxLength, minLength]}
      />
      <Field name="password"
        className={style.appLoginPassword} 
        component={LoginInputControl}
        placeholder="Пароль"
        type="password"
        validate={[required, maxLength, minLength]}
      />

      <div>
        <Field name="rememberMe"
          className={style.appLoginCheckbox} 
          component="input"
          type="checkbox"
          placeholder="Пароль"
        />Запомнить меня
      </div>

      <button>Войти</button>
      <div className={style.appLoginError}>{error}</div>
    </form>
  );
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const LoginContainer = () => {
  return (
    <div className={style.login}>
      <LoginReduxForm />
    </div>
  )
}

const mapStateToProps = ({main}) => ({
  main,
});

export default connect(mapStateToProps, {})(LoginContainer);