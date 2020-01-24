import React, { Component } from 'react';
import basketImage from './img/basket.png';
import style from './Navbar.module.css';
import basket from "../../services/Basket";
import {NavLink} from "react-router-dom";

class NavbarContainer extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className={style.navbar}>
        <button className={style.navbarLogin}>Log In</button>

        <div className={style.navbarImage}>
          {basket.checklist.length} 
          <img src={basketImage} alt="basketIcon"/>
        </div>
      </div>
    );
  }
}

export default NavbarContainer;
