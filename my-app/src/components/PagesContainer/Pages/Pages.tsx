import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Pages.module.css';

interface iProps {
  pages: Array<number> | null,
  usePage: number | null,
  setUsePageTC: any,
}

const Pages = ({pages, usePage, setUsePageTC}: iProps) => {
  if (pages === null || usePage === null) return null;

  const pageClicked = (e) => {
    if (+e.target.textContent !== usePage) {
      setUsePageTC(+e.target.textContent);
    }
  }
  
  return (
    <ul className={style.pages}>
      {
        pages.map((item) => {
          return (
            <NavLink key={item} to={`/${item}`}>
              <li onClick={pageClicked} className={item === usePage ? style.usePage : style.page}>
                {item}
              </li>
            </NavLink>
          )
        })
      }
    </ul>
  );
}

export default Pages;
