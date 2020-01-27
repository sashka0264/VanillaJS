/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBasketStatusTC } from '../../redux/actions';
import Navbar from './Navbar/Navbar';

interface IProps {
  setBasketStatusTC: (x: boolean) => void,
  basketStatus: boolean,
  basketList: Array<{id: number}>,
  loginStatus: boolean,
  loginName: null | string,
}

class NavbarContainer extends Component <IProps> {
  onBasketClicked = () => {
    const { basketStatus, setBasketStatusTC } = this.props;
    setBasketStatusTC(!basketStatus);
  }

  render() {
    const {
        basketStatus, basketList, loginName, loginStatus,
      } = this.props,
      { length } = basketList;
    return (
      <Navbar
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
  { main: { basket: { basketStatus, basketList }, login: { status, name } } },
) => ({
  basketStatus,
  basketList,
  loginStatus: status,
  loginName: name,
});

export default connect(mapStateToProps, { setBasketStatusTC })(NavbarContainer);
