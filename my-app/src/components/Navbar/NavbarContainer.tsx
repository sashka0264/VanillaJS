/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOutTC } from '../../redux/reducers/loginReducer';
import { setBasketStatusTC } from '../../redux/reducers/basketReducer';
import Navbar from './Navbar/Navbar';

interface IProps {
  setBasketStatusTC: (x: boolean) => void,
  basketStatus: boolean,
  basketList: Array<{id: number}>,
  loginStatus: boolean,
  loginName: null | string,
  logOutTC: () => void,
}

class NavbarContainer extends Component <IProps> {
  onBasketClicked = () => {
    const { basketStatus, setBasketStatusTC } = this.props;
    setBasketStatusTC(!basketStatus);
  }

  onLogOut = () => {
    const { logOutTC } = this.props;
    logOutTC();
  }

  render() {
    const {
        basketStatus, basketList, loginName, loginStatus,
      } = this.props,
      { length } = basketList;
    return (
      <Navbar
        onLogOut={this.onLogOut}
        loginStatus={loginStatus}
        length={length}
        onBasketClicked={this.onBasketClicked}
        basketStatus={basketStatus}
        loginName={loginName}
      />
    );
  }
}

const mapStateToProps = (
  { basket: { basketStatus, basketList }, login: { status, name } },
) => ({
  basketStatus,
  basketList,
  loginStatus: status,
  loginName: name,
});

export default connect(mapStateToProps, { setBasketStatusTC, logOutTC })(NavbarContainer);

