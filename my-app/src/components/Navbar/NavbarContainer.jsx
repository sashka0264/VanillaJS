import React, { Component } from 'react';
import basketImage from './img/basket.png';
import style from './Navbar.module.css';
import basket from "../../services/Basket";

class NavbarContainer extends Component {
  componentDidMount() {
    console.log(basket.checklist.length)
  }

  render() {
    return (
      <div className={style.navbar}>
        <button className={style.navbarLogin}>Log In</button>

        <div className={style.navbarImage}>
          {basket.checklist.length} 
          <img src={basketImage}/> 
        </div>
      </div>
    );
  }
}

export default NavbarContainer;
