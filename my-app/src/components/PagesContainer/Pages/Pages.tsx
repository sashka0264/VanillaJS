import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Pages.module.css';
import left from './img/left.png';
import right from './img/right.png';

interface iProps {
  pages: Array<number> | null,
  usePage: number | null,
  setUsePageTC: any,
  paginatorView: any,
  onLeft: any,
  onRight: any,
}

const Pages = ({ pages, usePage, paginatorView, onLeft, onRight }: iProps) => {
  if (!pages || !usePage) return null;
  return (
    <ul className={style.pages}>
      {
       paginatorView !== 1 && <img src={left} alt="left" onClick={onLeft}/>
      }
      {
        pages.map((item, i, arr) => {
          if (i >= (paginatorView - 1) * (Math.ceil(arr.length / 4)) && i < paginatorView * (Math.ceil(arr.length / 4))) {
            return (
              <NavLink className={style.page} key={item} to={`/${item}`}>
                {item}
              </NavLink>
            );
          }
          return null;
        })
      }
      {
       (paginatorView !== Math.ceil(pages.length / 4)) && <img src={right} alt="right" onClick={onRight}/>
      }
    </ul>
  );
};

export default Pages;
