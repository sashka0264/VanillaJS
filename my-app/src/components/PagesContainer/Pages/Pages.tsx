/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Pages.module.css';
import left from './img/left.png';
import right from './img/right.png';

interface iProps {
  pages: Array<number> | null,
  usePage: number | null,
  paginatorView: number,
  onLeft: () => void,
  onRight: () => void
}

const Pages = ({
  pages, usePage, paginatorView, onLeft, onRight,
}: iProps) => {
  if (!pages || !usePage) return null;
  const pagesLength = Math.ceil(pages.length / 4);
  return (
    <ul className={style.pages}>
      {
       paginatorView !== 1 && <img className={style.pagesArrow} src={left} alt="left" onClick={onLeft} />
      }
      {
        pages.map((item, i) => {
          if (i >= (paginatorView - 1) * pagesLength
          && i < paginatorView * pagesLength) {
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
       (paginatorView !== pagesLength) && <img className={style.pagesArrow} src={right} alt="right" onClick={onRight} />
      }
    </ul>
  );
};

export default Pages;
