import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCardsTC, addBasketProductAC, removeBasketProductAC } from '../../redux/actions';
import Cards from './Cards/Cards';
import dataAPI from '../../services/DataAPI';

export interface IProps {
  spinner: boolean,
  listOfCards: null | Array<any>,
  location?: any,
  onCardClicked?: any,
  basketList?: any,
  onCardDeleted?: any,
  addBasketProductAC?: any,
  removeBasketProductAC?: any,
}

class CardsContainer extends Component <IProps> {
  componentDidMount() {
    const {
        getCardsTC, location, basketStatus, basketList,
      }: any = this.props as any,
      param = +location.pathname.replace(/\//g, '');

    if (!isNaN(param) && param <= dataAPI.pages && param > 0) {
      dataAPI.usePage = param;
      getCardsTC(basketStatus, basketList);
    }
  }

  componentDidUpdate(prevProps) {
    const {
        getCardsTC, basketList, basketStatus, location,
      }: any = this.props as any,
      param = +location.pathname.replace(/\//g, '');

    if (dataAPI.usePage !== param || basketStatus !== prevProps.basketStatus) {
      dataAPI.usePage = param;
      getCardsTC(basketStatus, basketList);
    }

    localStorage.setItem('beers-basket', JSON.stringify(basketList));
  }

  onCardClicked = (e) => {
    const { addBasketProductAC } = this.props;
    addBasketProductAC({ id: +e.target.parentElement.id });
  }

  onCardDeleted = (e) => {
    const { removeBasketProductAC } = this.props;
    removeBasketProductAC(+e.target.parentElement.id);
  }

  render() {
    const { spinner, listOfCards, basketList } = this.props;
    return (
      <Cards
        basketList={basketList}
        spinner={spinner}
        listOfCards={listOfCards}
        onCardDeleted={this.onCardDeleted}
        onCardClicked={this.onCardClicked}
      />
    );
  }
}

const mapStateToProps = (
  { main: { cards: { spinner, listOfCards }, basket: { basketStatus, basketList } } } : any,
) => ({
  spinner,
  listOfCards,
  basketStatus,
  basketList,
});


export default connect(
  mapStateToProps, { getCardsTC, addBasketProductAC, removeBasketProductAC },
)(CardsContainer);
