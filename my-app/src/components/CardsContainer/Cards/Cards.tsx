/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Card from './Card/Card';
import Spinner from '../../../common/Spinner/Spinner';
import style from './Cards.module.css';

interface IProps {
  spinner: boolean,
  listOfCards: null | Array<any>,
  onCardClicked: (e: Event) => void,
  basketList: Array<{id: number}>,
  onCardDeleted: (e: Event) => void,
}

const Cards = ({
  spinner, listOfCards, onCardClicked, basketList, onCardDeleted,
} : IProps) => {
  if (spinner) return <div className={style.cards}><Spinner /></div>;

  let data: null | Array<any> = null;

  if (listOfCards) {
    data = listOfCards.map((item) => {
      let basketClicked = false;
      basketList.forEach((basketElement) => {
        if (item.id === basketElement.id) {
          basketClicked = true;
        }
      });
      if (basketClicked) {
        return (
          <Card
            onCardDeleted={onCardDeleted}
            id={item.id}
            key={item.id}
            {...item}
            basketClicked
          />
        );
      }
      return <Card onCardClicked={onCardClicked} id={item.id} key={item.id} {...item} />;
    });
  }

  return (
    <div className={style.cards}>
      {
        data
      }
    </div>
  );
};

export default Cards;
