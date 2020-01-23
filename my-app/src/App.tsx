/* eslint-disable react/prefer-stateless-function */
/* eslint-disable one-var */
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import {compose} from "redux";
import { BrowserRouter as Router, withRouter} from 'react-router-dom';
import CardsContainer from './components/CardsContainer/CardsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import PagesContainer from './components/PagesContainer/PagesContainer';
import store from './redux/store';
import './App.css';

const AppContainer = () => (
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>
);

class App extends Component <any> {
  render() {
    console.log(this.props)
    return (
      <div>
        <NavbarContainer />
        <PagesContainer />
        <CardsContainer />
      </div>
    );
  }
}

const AppWithRouter = compose(
  withRouter
)(App);

export default AppContainer;
