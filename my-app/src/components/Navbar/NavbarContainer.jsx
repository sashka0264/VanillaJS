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
    const {basketStatus, basketList, onLoginClicked} = this.props;
    const length = basketList.length;
    return (
      <Navbar 
        onLoginClicked={onLoginClicked}
        length={length}
        onBasketClicked={this.onBasketClicked} 
        basketStatus={basketStatus}
      />
    );
  }
}

const mapStateToProps = ( { main : { basket: { basketStatus, basketList } } } ) => ({
  basketStatus,
  basketList,
});

export default connect(mapStateToProps, {setBasketStatusAC})(NavbarContainer);
