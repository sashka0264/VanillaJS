import React, { Component } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { match } from 'react-router-dom';
import { getCardsTC } from '../../redux/reducers/cardsReducer';
import { addBasketProductAC, removeBasketProductAC } from '../../redux/reducers/basketReducer';
import Cards from './Cards/Cards';
import dataAPI from '../../services/DataAPI';

interface CardsContainerProps {
  spinner: boolean,
  listOfCards: null | Array<{id: number}>,
  basketList: Array<{id: number}>,
  addBasketProductAC: ({ id: number }) => void,
  removeBasketProductAC: (x: number) => void,
  match: match<{page?: string | undefined}>,
  getCardsTC: (x: boolean, y: Array<{id: number}>) => void,
  basketStatus: boolean
}

class CardsContainer extends Component <CardsContainerProps> {
  componentDidMount() {
    const {
      // eslint-disable-next-line no-shadow
        getCardsTC, basketStatus, basketList, match: { params: { page } }
      } = this.props,
      pageNumber: number = Number(page);

    if (pageNumber <= dataAPI.pages && pageNumber > 0) {
      dataAPI.usePage = pageNumber;
      getCardsTC(basketStatus, basketList);
    }
  }

  componentDidUpdate(prevProps: {basketStatus: boolean}) {
    const {
      // eslint-disable-next-line no-shadow
        getCardsTC, basketList, basketStatus, match: { params: { page } }
      } = this.props,
      pageNumber: number = Number(page);

    if (dataAPI.usePage !== pageNumber || basketStatus !== prevProps.basketStatus) {
      dataAPI.usePage = pageNumber;
      getCardsTC(basketStatus, basketList);
    }

    localStorage.setItem('beers-basket', JSON.stringify(basketList));
  }

  onCardClicked = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, status: boolean) => {
    // eslint-disable-next-line no-shadow
    const { addBasketProductAC, removeBasketProductAC } = this.props,
      element = e.target as HTMLButtonElement,
      card = element.closest('.card') as HTMLDivElement,
      id: number = Number(card.id);

    if (status) {
      removeBasketProductAC(id);
    } else {
      addBasketProductAC({ id });
    }
  }

  render() {
    const { spinner, listOfCards, basketList } = this.props;
    return (
      <Cards
        basketList={basketList}
        spinner={spinner}
        listOfCards={listOfCards}
        onCardClicked={this.onCardClicked}
      />
    );
  }
}

const mapStateToProps = (
  { cards: { spinner, listOfCards }, basket: { basketStatus, basketList } }
) => ({
  spinner,
  listOfCards,
  basketStatus,
  basketList
});


export default connect(
  mapStateToProps, { getCardsTC, addBasketProductAC, removeBasketProductAC }
)(CardsContainer);
