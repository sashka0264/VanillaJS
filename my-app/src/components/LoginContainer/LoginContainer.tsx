import React from 'react';
import { connect } from 'react-redux';
import LoginReduxForm from './Login/Login';
import { loginAC } from '../../redux/reducers/loginReducer';

interface LoginContainerProps {
  loginAC: (x: string) => void
}

const LoginContainer: React.FC<LoginContainerProps> = ({
  // eslint-disable-next-line no-shadow
  loginAC
}:LoginContainerProps) => {
  const onSubmit = ({ name }:{ name: string }):void => {
    localStorage.setItem('beers-login', JSON.stringify({ status: true, name }));
    loginAC(name);
  };
  return <LoginReduxForm onSubmit={onSubmit} />;
};

export default connect(null, { loginAC })(LoginContainer);
