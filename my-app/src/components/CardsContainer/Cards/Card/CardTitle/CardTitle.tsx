/* eslint-disable camelcase */
import React from 'react';
import style from './CardTitle.module.css';

interface CardTitle {
  name: string,
  firstBrewed: string
}

const CardTitle: React.FC<CardTitle> = ({ name, firstBrewed }:CardTitle) => (
  <div className={style.cardTitle}>
    {name}
    <span className={style.cardBrewed}>{`(${firstBrewed.replace(/\//g, '.')})`}</span>
  </div>
);

export default CardTitle;
