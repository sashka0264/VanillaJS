/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Card from './Card/Card';
import Spinner from '../../../common/Spinner/Spinner';
import style from './Cards.module.css';

interface IProps {
  spinner: boolean,
  listOfCards: null | Array<any>,
  onCardClicked: (e: any, status: any) => void,
  basketList: Array<{id: number}>,
}

const Cards = ({
  spinner, listOfCards, onCardClicked, basketList,
} : IProps) => {
  if (spinner) return <div className={style.cards}><Spinner /></div>;

  const data = listOfCards && listOfCards.map((item) => {
    const basketClicked = basketList.some(({ id }) => item.id === id),
      cardProps = {
        ...item,
        id: item.id,
        key: item.id,
        basketClicked,
        onCardClicked,
      };
    return <Card {...cardProps} />;
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
