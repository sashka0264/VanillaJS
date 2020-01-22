import React, { Component } from 'react';
import { getCardsTC } from '../../redux/actions';
import { connect } from 'react-redux';
import Cards from './Cards/Cards';

export interface IProps {
  spinner: boolean
}

class CardsContainer extends Component {
  componentDidMount() {
    const { getCardsTC }: any = this.props as any;
    getCardsTC();
  }

  render() {
    const { spinner }: IProps = this.props as IProps;
    return <Cards spinner={spinner} />;
  }
}

const mapStateToProps = ({ main: { cards: { spinner } } } : any) => ({
  spinner,
});


export default connect(mapStateToProps, { getCardsTC })(CardsContainer);
