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
import style from './App.module.css';
import LoginContainer from './components/LoginContainer/LoginContainer';

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
  constructor(props) {
    super(props);
    this.state = {
      loginMenu: true,
    }
  }

  onLoginClicked = () => {
    this.setState({ loginMenu: true })
  }

  render() {
    const {location}: IProps = this.props as IProps;
    const {loginMenu} = this.state as any;

    return (
      <div className="container">
        <NavbarContainer onLoginClicked={this.onLoginClicked}/>
        {loginMenu ? 
          <LoginContainer /> :
          <>
            <PagesContainer />
            <div className={style.navigation}>
              <SearchPanelContainer />
              <CardsContainer location={location}/>
            </div>      
          </>
        }
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

export default AppContainer;
