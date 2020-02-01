/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import style from './Navbar.module.css';
import closeImage from './img/close.png';
import basketImage from './img/basket.png';

interface NavbarProps {
  length: number,
  onBasketClicked: () => void,
  basketStatus: boolean,
  loginStatus: boolean,
  loginName: null | string,
  onLogOut: () => void,
}

const Navbar: React.FC<NavbarProps> = ({
  length,
  onBasketClicked,
  basketStatus,
  loginStatus,
  loginName,
  onLogOut,
}) => (
  <div className={style.navbar}>
    {
      loginStatus ? (
        <>
          <div className={style.navbarLogin}>
            <button className={style.navbarLogout} type="button" onClick={onLogOut}>Log out</button>
            <div>
              Logged in as
              <span className={style.navbarName}>
                {` ${loginName}`}
              </span>
            </div>
          </div>

          <button type="button" className={style.navbarBasket} onClick={onBasketClicked}>
            { length }
            <img
              src={basketStatus ? closeImage : basketImage}
              alt="basket-icon"
            />
          </button>
        </>
      ) : null
    }
  </div>
);

export default Navbar;
