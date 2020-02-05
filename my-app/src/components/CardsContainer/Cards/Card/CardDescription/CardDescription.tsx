import React from 'react';
import style from './CardDescription.module.css';

interface CardDescription {
  description: string
}

const CardDescription: React.FC<CardDescription> = ({ description }:CardDescription) => (
  <div className={style.cardDescription}>{description}</div>
);

export default CardDescription;
