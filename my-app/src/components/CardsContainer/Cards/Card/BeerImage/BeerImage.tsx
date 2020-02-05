import React from 'react';
import style from './BeerImage.module.css';
import noPhoto from './img/noPhoto.png';

interface BeerImage {
  imageUrl: string
}

const BeerImage: React.FC<BeerImage> = ({ imageUrl }:BeerImage) => (
  <img className={imageUrl ? style.cardImage : style.NoCardImage} alt="beer" src={imageUrl || noPhoto} />
);

export default BeerImage;
