import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import CardsContainer from './components/CardsContainer/CardsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import store from './redux/store';
import './App.css';

const AppContainer = () => (
  <Provider store={store}>
    <Router>
      <AppState />
    </Router>
  </Provider>
);


// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <NavbarContainer />
        <CardsContainer />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const AppState = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
