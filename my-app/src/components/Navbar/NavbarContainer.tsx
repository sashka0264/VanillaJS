/* eslint-disable prefer-arrow-callback */
/* eslint-disable one-var */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-shadow */
import React from 'react';
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
  logOutTC: () => void
}

const NavbarContainer = React.memo(function NavbarContainer({
  setBasketStatusTC, basketStatus, loginStatus, logOutTC, basketList, loginName
}:IProps) {
  const onBasketClicked = () => {
    setBasketStatusTC(!basketStatus);
  };

  const onLogOut = () => logOutTC();

  return (
    <Navbar
      onLogOut={onLogOut}
      loginStatus={loginStatus}
      length={basketList.length}
      onBasketClicked={onBasketClicked}
      basketStatus={basketStatus}
      loginName={loginName}
    />
  );
});


const mapStateToProps = (
  { basket: { basketStatus, basketList }, login: { status, name } }
) => ({
  basketStatus,
  basketList,
  loginStatus: status,
  loginName: name
});

export default connect(mapStateToProps, { setBasketStatusTC, logOutTC })(NavbarContainer);
