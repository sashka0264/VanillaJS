import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  withRouter,
  Redirect,
  Route,
} from 'react-router-dom';
import { Provider, connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { Location } from 'history';
import store from './redux/store';
import dataAPI from './services/DataAPI';
import CardsContainer from './components/CardsContainer/CardsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import PagesContainer from './components/PagesContainer/PagesContainer';
import SearchPanelContainer from './components/SearchPanelContainer/SearchPanelContainer';
import LoginContainer from './components/LoginContainer/LoginContainer';
import style from './App.module.css';

export const AppContainer: React.FC = () => (
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>
);

class App extends PureComponent <{location: Location, loginStatus: boolean}> {
  render() {
    const { location, loginStatus } = this.props,
      x: number = Number(location.pathname.slice(1));

    if (x < 1 || x > dataAPI.pages || isNaN(x)) {
      return <Redirect to="/1" />;
    }

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
                <Route
                  path="/:page?"
                  component={CardsContainer}
                />
              </div>
            </>
          )}
      </div>
    );
  }
}

const mapStateToProps = ({ login: { status } }) => ({
    loginStatus: status,
  }),
  AppWithState = connect(mapStateToProps, {})(App),
  AppWithRouter = withRouter(AppWithState);

export default AppContainer;
