import React from 'react';
import { IProps } from '../CardsContainer';
import Spinner from '../../../common/Spinner/Spinner';

const Cards = ({ spinner } : IProps) => {
  if (spinner) {
    return <Spinner />;
  }
  return (
    <div>Cards</div>
  );
};


export default Cards;
