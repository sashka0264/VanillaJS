/* eslint-disable react/prefer-stateless-function */
/* eslint-disable one-var */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, withRouter} from 'react-router-dom';
import CardsContainer from './components/CardsContainer/CardsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import PagesContainer from './components/PagesContainer/PagesContainer';
import SearchPanelContainer from './components/SearchPanelContainer/SearchPanelContainer';
import store from './redux/store';
import './App.css';

export interface IProps {
  location: any
}

const AppContainer = () => (
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>
);

class App extends Component <any> {
  render() {
    const {location}: IProps = this.props as IProps;
    return (
      <div className="container">
        <NavbarContainer />
        <SearchPanelContainer />
        <PagesContainer />
        <CardsContainer location={location}/>
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

export default AppContainer;
