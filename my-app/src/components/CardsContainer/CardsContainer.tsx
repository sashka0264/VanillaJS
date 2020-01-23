import React, { Component } from 'react';
import { getCardsTC } from '../../redux/actions';
import { connect } from 'react-redux';
import Cards from './Cards/Cards';

export interface IProps {
  spinner: boolean,
  listOfCards: null | Array<any>
}

class CardsContainer extends Component {
  componentDidMount() {
    const { getCardsTC }: any = this.props as any;
    getCardsTC();
  }

  render() {
    const { spinner, listOfCards }: IProps = this.props as IProps;
    return <Cards spinner={spinner} listOfCards={listOfCards} />;
  }
}

const mapStateToProps = ({ main: { cards: { spinner, listOfCards } } } : any) => ({
  spinner,
  listOfCards,
});


export default connect(mapStateToProps, { getCardsTC })(CardsContainer);
