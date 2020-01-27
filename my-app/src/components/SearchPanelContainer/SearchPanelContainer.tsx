import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchPanel from './SearchPanel/SearchPanel';
import { getCardsTC } from '../../redux/actions';
import dataAPI from '../../services/DataAPI';

class SearchPanelContainer extends Component {
  set = {
    name: (name) => {
      this.setState({ name });
      dataAPI.beerName = name;
    },
    yeast: (yeast) => {
      this.setState({ yeast });
      dataAPI.yeast = yeast;
    },
    food: (food) => {
      this.setState({ food });
      dataAPI.food = food;
    },
    malt: (malt) => {
      this.setState({ malt });
      dataAPI.malt = malt;
    },
    hops: (hops) => {
      this.setState({ hops });
      dataAPI.hops = hops;
    },
    minABV: (minABV) => {
      this.setState({ minABV });
      dataAPI.minABV = minABV;
    },
    maxABV: (maxABV) => {
      this.setState({ maxABV });
      dataAPI.maxABV = maxABV;
    },
    minIBU: (minIBU) => {
      this.setState({ minIBU });
      dataAPI.minIBU = minIBU;
    },
    maxIBU: (maxIBU) => {
      this.setState({ maxIBU });
      dataAPI.maxIBU = maxIBU;
    },
    minEBC: (minEBC) => {
      this.setState({ minEBC });
      dataAPI.minEBC = minEBC;
    },
    maxEBC: (maxEBC) => {
      this.setState({ maxEBC });
      dataAPI.maxEBC = maxEBC;
    },
    from: (from) => {
      this.setState({ from });
      dataAPI.periodFrom = from;
    },
    to: (to) => {
      this.setState({ to });
      dataAPI.periodTo = to;
    },
  }

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
      to: '',
    };
  }

  componentDidUpdate(prevProps) {
    const { basketStatus } = this.props as any;
    if (basketStatus !== prevProps.basketStatus) {
      const {
        name, yeast, food, malt, hops, minABV, maxABV, minIBU, maxIBU, minEBC, maxEBC, from, to,
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

const mapStateToProps = ({ main: { basket: { basketStatus, basketList } } }) => ({
  basketStatus,
  basketList,
});

export default connect(mapStateToProps, { getCardsTC })(SearchPanelContainer);
