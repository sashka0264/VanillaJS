import React from 'react';
import style from './CardSubtitle.module.css';

interface CardSubitle {
  tagline: string
}

const CardSubitle: React.FC<CardSubitle> = ({ tagline }:CardSubitle) => (
  <div className={style.cardSubtitle}>{ tagline }</div>
);

export default CardSubitle;
