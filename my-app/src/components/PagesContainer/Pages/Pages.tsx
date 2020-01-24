import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Pages.module.css';

interface iProps {
  pages: Array<number> | null,
  usePage: number | null,
  setUsePageTC: any,
}

const Pages = ({pages, usePage, setUsePageTC}: iProps) => {
  if (!pages || !usePage) return null;
  
  return (
    <ul className={style.pages}>
      {
        pages.map((item) => {
          return (
            <NavLink className={style.page} key={item} to={`/${item}`}>
              {item}
            </NavLink>
          )
        })
      }
    </ul>
  );
}

export default Pages;
