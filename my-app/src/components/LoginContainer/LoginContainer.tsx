import React from 'react';
import { connect } from 'react-redux';
import LoginReduxForm from './Login/Login';
import { loginAC } from '../../redux/reducers/loginReducer';

const LoginContainer = ({ loginAC }) => {
  const onSubmit = ({ name }) => {
    localStorage.setItem('beers-login', JSON.stringify({ status: true, name }));
    loginAC(name);
  };
  return <LoginReduxForm onSubmit={onSubmit} />;
};

export default connect(null, { loginAC })(LoginContainer);
