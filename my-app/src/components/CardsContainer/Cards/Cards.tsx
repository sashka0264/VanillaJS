import React from 'react';
import { IProps as IGetProps} from '../CardsContainer';
import Card from './Card/Card';
import Spinner from '../../../common/Spinner/Spinner';
import style from './Cards.module.css';

const Cards = ({ spinner, listOfCards, onCardClicked } : IGetProps) => {
  if (spinner) return <div className={style.cards}><Spinner /></div>;

  let data: null | Array<any> = null;

  if (listOfCards) data = listOfCards.map((item) => <Card onCardClicked={onCardClicked} id={item.id} key={item.id} {...item} />);

  return (
    <div className={style.cards}>
      {
        data
      }
    </div>
  );
};


export default Cards;
