/* eslint-disable react/prefer-stateless-function */
/* eslint-disable one-var */
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import { BrowserRouter as Router, withRouter, Redirect } from 'react-router-dom';

import CardsContainer from './components/CardsContainer/CardsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import PagesContainer from './components/PagesContainer/PagesContainer';
import SearchPanelContainer from './components/SearchPanelContainer/SearchPanelContainer';
import store from './redux/store';
import style from './App.module.css';
import LoginContainer from './components/LoginContainer/LoginContainer';
import dataAPI from './services/DataAPI';

export interface IProps {
  location: any,
  loginStatus: boolean,
}

const AppContainer = () => (
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>
);

export default AppContainer;

class App extends Component <any> {
  render() {
    const { location, loginStatus }: IProps = this.props as IProps;
    const param = +location.pathname.replace(/\//g, '');
    if (param < 1 || param > dataAPI.pages || isNaN(param)) return <Redirect to="/1" />;

    return (
      <div className="container">
        <NavbarContainer />
        {!loginStatus
          ? <LoginContainer />
          : (
            <>
              <PagesContainer />
              <div className={style.navigation}>
                <SearchPanelContainer />
                <CardsContainer location={location} />
              </div>
            </>
          )}
      </div>
    );
  }
}

const mapStateToProps = ({ main: { login: { status } } }) => ({
  loginStatus: status,
});

const AppWithState = connect(mapStateToProps, {})(App);
const AppWithRouter = withRouter(AppWithState);
