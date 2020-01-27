import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setBasketStatusAC} from '../../redux/actions';
import Navbar from './Navbar/Navbar';

class NavbarContainer extends Component {
  onBasketClicked = () => {
    const {setBasketStatusAC, basketStatus} = this.props;
    setBasketStatusAC(!basketStatus);
    localStorage.setItem('basket-status', JSON.stringify(!basketStatus));
  }

  render() {
    const {basketStatus, basketList, loginName, loginStatus} = this.props;
    const length = basketList.length;
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

const mapStateToProps = ( { main : { basket: { basketStatus, basketList }, login: { status, name } } } ) => ({
  basketStatus,
  basketList,
  loginStatus: status,
  loginName: name,
});

export default connect(mapStateToProps, {setBasketStatusAC})(NavbarContainer);
