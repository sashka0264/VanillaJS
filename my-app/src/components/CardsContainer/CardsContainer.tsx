import React, { Component } from 'react';
import { getCardsTC } from '../../redux/actions';
import { connect } from 'react-redux';
import Cards from './Cards/Cards';
import dataAPI from '../../services/DataAPI'
import basket from '../../services/Basket';

export interface IProps {
  spinner: boolean,
  listOfCards: null | Array<any>,
  location?: any,
  onCardClicked?: any,
}

class CardsContainer extends Component <IProps> {
  componentDidMount() {
    const { getCardsTC, location, basketStatus }: any = this.props as any;
    const param = +location.pathname.replace(/\//g, "");

    if (!isNaN(param) && param <= dataAPI.pages && param > 0) {
      dataAPI.usePage = param;
      getCardsTC(basketStatus);
    } else {
      // console.warn('Обработай эту ошибку, выведи, что такой страницы нет', param)
    }
  }

  componentDidUpdate() {
    const { getCardsTC, basketStatus }: any = this.props as any;
    const newPage = +this.props.location.pathname.replace(/\//g, "")
    
    if (dataAPI.usePage !== newPage) {
      dataAPI.usePage = newPage;
      getCardsTC(basketStatus);
    }
  }

  onCardClicked = (e) => {
    basket.addProduct({id: e.target.parentElement.id})
  }

  render() {
    const { spinner, listOfCards } = this.props;
    return (
      <Cards spinner={spinner} listOfCards={listOfCards} onCardClicked={this.onCardClicked}/>
    );
  }
}

const mapStateToProps = ({ main: { cards: { spinner, listOfCards }, basketStatus } } : any) => ({
  spinner,
  listOfCards,
  basketStatus,
});


export default connect(mapStateToProps, { getCardsTC })(CardsContainer);
