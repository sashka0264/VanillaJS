import React from 'react';
import Card from './Card/Card';

interface CardsProps {
  spinner: boolean,
  listOfCards: null | Array<any>,
  onCardClicked: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, status: boolean) => void,
  basketList: Array<{id: number}>
}

const Cards: React.FC<CardsProps> = ({
  listOfCards, onCardClicked, basketList
} : CardsProps) => {

  const cardsList = listOfCards && listOfCards.map((item) => {
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

  return <>{ cardsList }</>;
};

export default Cards;
