/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import style from './Navbar.module.css';
import closeImage from './img/close.png';
import basketImage from './img/basket.png';

interface IProps {
  length: number,
  onBasketClicked: () => void,
  basketStatus: boolean,
  loginStatus: boolean,
  loginName: null | string,
}

const Navbar = ({
  length,
  onBasketClicked,
  basketStatus,
  loginStatus,
  loginName,
}:IProps) => (
  <div className={style.navbar}>
    {
      loginStatus ? (
        <>
          <span className={style.navbarName}>{ loginName }</span>

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
