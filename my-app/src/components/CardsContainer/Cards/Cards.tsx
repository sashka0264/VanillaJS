import React from 'react';
import { IProps as IGetProps} from '../CardsContainer';
import Card from './Card/Card';
import Spinner from '../../../common/Spinner/Spinner';
import style from './Cards.module.css';

const Cards = ({ spinner, listOfCards, onCardClicked, basketList, onCardDeleted} : IGetProps) => {
  if (spinner) return <div className={style.cards}><Spinner /></div>;

  let data: null | Array<any> = null;

  if (listOfCards) data = listOfCards.map((item) => {
    let basketClicked = false;
    basketList.forEach((basketElement) => {
      if (item.id == basketElement.id) {
        basketClicked = true;
      }
    })
    if (basketClicked) return <Card onCardDeleted={onCardDeleted} id={item.id} key={item.id} {...item} basketClicked />
    return <Card onCardClicked={onCardClicked} id={item.id} key={item.id} {...item} />
  });

  return (
    <div className={style.cards}>
      {
        data
      }
    </div>
  );
};


export default Cards;
