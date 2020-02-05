import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchPanel from './SearchPanel/SearchPanel';
import { getCardsTC } from '../../redux/reducers/cardsReducer';
import dataAPI from '../../services/DataAPI';


class SearchPanelContainer extends Component <{basketStatus: boolean, basketList: {id: number}}> {

  set: any = {}

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      yeast: '',
      food: '',
      malt: '',
      hops: '',
      minABV: '',
      maxABV: '',
      minIBU: '',
      maxIBU: '',
      minEBC: '',
      maxEBC: '',
      from: '',
      to: ''
    };
  }

  componentDidMount() {
    const items = ['name', 'yeast', 'food', 'malt', 'hops', 'minABV', 'maxABV', 'minIBU', 'maxIBU', 'minEBC', 'maxEBC', 'from', 'to'];

    items.forEach((item) => {
      const value = item;
      this.set[value] = (arg) => {
        this.setState({ [value]: arg });
        switch (value) {
          case 'name':
            dataAPI.beerName = arg;
            break;
          case 'from':
            dataAPI.periodFrom = arg;
            break;
          case 'to':
            dataAPI.periodTo = arg;
            break;
          default:
            dataAPI[value] = arg;
            break;
        }
      };
    });
  }

  componentDidUpdate(prevProps) {
    const { basketStatus } = this.props as any;
    if (basketStatus !== prevProps.basketStatus) {
      const {
        name, yeast, food, malt, hops, minABV, maxABV, minIBU, maxIBU, minEBC, maxEBC, from, to
      } = this.set;
      name('');
      yeast('');
      food('');
      malt('');
      hops('');
      minABV('');
      maxABV('');
      minIBU('');
      maxIBU('');
      minEBC('');
      maxEBC('');
      from('');
      to('');
    }
  }

  startSearch = () => {
    const { basketStatus, basketList, getCardsTC } = this.props as any;
    getCardsTC(basketStatus, basketList);
  }

  render() {
    return (
      <SearchPanel inputs={this.state} set={this.set} startSearch={this.startSearch} />
    );
  }
}

const mapStateToProps = ({ basket: { basketStatus, basketList } }) => ({
  basketStatus,
  basketList
});

export default connect(mapStateToProps, { getCardsTC })(SearchPanelContainer);
