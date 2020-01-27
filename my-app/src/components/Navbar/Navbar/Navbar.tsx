import React from 'react';
import style from './Navbar.module.css';
import closeImage from './img/close.png';
import basketImage from './img/basket.png';

const Navbar = ({
  length, onBasketClicked, basketStatus, loginStatus, loginName,
}) => (
  <>
    <div className={style.navbar}>
      {
          loginStatus
            && (
              <>
                <span className={style.navbarName}>{loginName}</span>

                <div className={style.navbarImage}>
                  { length }
                  <img 
                    onClick={onBasketClicked} 
                    src={basketStatus ? closeImage : basketImage} 
                    alt="basketIcon" 
                  />
                </div>
              </>
            )
        }
    </div>
  </>
);

export default Navbar;
