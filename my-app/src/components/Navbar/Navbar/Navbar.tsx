import React from 'react';
import style from './Navbar.module.css';
import closeImage from './img/close.png';
import basketImage from './img/basket.png';

const Navbar = ({length, onBasketClicked, basketStatus, onLoginClicked}) => {
  return (
    <>
      <div className={style.navbar}>
        <button className={style.navbarLogin} onClick={onLoginClicked}>Log In</button>

        <div className={style.navbarImage}>
          { length } 
          <img onClick={onBasketClicked} src={basketStatus ? closeImage : basketImage} alt="basketIcon"/>
        </div>
      </div>
    </>
  )
}

export default Navbar;
