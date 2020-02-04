import React from 'react';
import Card from './Card/Card';
import Spinner from '../../../common/Spinner/Spinner';
import style from './Cards.module.css';

interface CardsProps {
  spinner: boolean,
  listOfCards: null | Array<any>,
  onCardClicked: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, status: boolean) => void,
  basketList: Array<{id: number}>
}

const Cards: React.FC<CardsProps> = ({
  spinner, listOfCards, onCardClicked, basketList
} : CardsProps) => {
  if (spinner) return <div className={style.cards}><Spinner /></div>;

  const data = listOfCards && listOfCards.map((item) => {
    const basketClicked = basketList.some(({ id }) => item.id === id),
      cardProps = {
        ...item,
        id: item.id,
        key: item.id,
        basketClicked,
        onCardClicked
      };
    // eslint-disable-next-line react/jsx-props-no-spreading
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
