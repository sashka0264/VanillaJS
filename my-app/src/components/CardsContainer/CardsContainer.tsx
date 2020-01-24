import React, { Component } from 'react';
import { getCardsTC } from '../../redux/actions';
import { connect } from 'react-redux';
import Cards from './Cards/Cards';
import {Route} from "react-router-dom";
import dataAPI from '../../services/DataAPI'

export interface IProps {
  spinner: boolean,
  listOfCards: null | Array<any>,
  location?: any,
}

class CardsContainer extends Component <IProps> {
  componentDidMount() {
    const { getCardsTC, location }: any = this.props as any;
    const param = +location.pathname.replace(/\//g, "")
    // dataAPI.usePage = param;
    // getCardsTC();
    // console.log('use', dataAPI.usePage)
    if (!isNaN(param) && param <= dataAPI.pages && param > 0) {
      dataAPI.usePage = param;
      getCardsTC();
    } else {
      console.log('Обработай эту ошибку, выведи, что такой страницы нет')
      console.log(param)
    }
  }

  componentDidUpdate() {
    const { getCardsTC }: any = this.props as any;
    const newPage = +this.props.location.pathname.replace(/\//g, "")

    if (dataAPI.usePage !== newPage) {
      dataAPI.usePage = newPage;
      getCardsTC();
    }
  }

  render() {
    const { spinner, listOfCards, location } = this.props;
    console.log(location.pathname.replace(/\//g, ""))

    return (
      <Cards spinner={spinner} listOfCards={listOfCards} />
    );
  }
}

const mapStateToProps = ({ main: { cards: { spinner, listOfCards } } } : any) => ({
  spinner,
  listOfCards,
});


export default connect(mapStateToProps, { getCardsTC })(CardsContainer);
