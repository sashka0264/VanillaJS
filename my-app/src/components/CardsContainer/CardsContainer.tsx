/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCardsTC } from '../../redux/reducers/cardsReducer';
import { addBasketProductAC, removeBasketProductAC } from '../../redux/reducers/basketReducer';
import Cards from './Cards/Cards';
import dataAPI from '../../services/DataAPI';

export interface IProps {
  spinner: boolean,
  listOfCards: null | Array<any>,
  basketList: Array<{id: number}>,
  addBasketProductAC: ({ id: number }) => void,
  removeBasketProductAC: (x: number) => void,
  match: any,
  getCardsTC: (x: boolean, y: any) => void,
  basketStatus: boolean,
}

class CardsContainer extends Component <IProps> {
  componentDidMount() {
    const {
      getCardsTC, basketStatus, basketList, match: { params: { page } },
    } = this.props;

    if (page <= dataAPI.pages && page > 0) {
      dataAPI.usePage = +page;
      getCardsTC(basketStatus, basketList);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      getCardsTC, basketList, basketStatus, match: { params: { page } },
    } = this.props;

    if (dataAPI.usePage !== +page || basketStatus !== prevProps.basketStatus) {
      dataAPI.usePage = +page;
      getCardsTC(basketStatus, basketList);
    }

    localStorage.setItem('beers-basket', JSON.stringify(basketList));
  }

  onCardClicked = (e, status) => {
    const { addBasketProductAC, removeBasketProductAC } = this.props;
    if (status) {
      addBasketProductAC({ id: +e.target.parentElement.id });
    } else {
      removeBasketProductAC(+e.target.parentElement.id);
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
  { cards: { spinner, listOfCards }, basket: { basketStatus, basketList } },
) => ({
  spinner,
  listOfCards,
  basketStatus,
  basketList,
});


export default connect(
  mapStateToProps, { getCardsTC, addBasketProductAC, removeBasketProductAC },
)(CardsContainer);
