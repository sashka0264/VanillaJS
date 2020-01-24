import React, {useState} from 'react';
import SearchPanel from './SearchPanel/SearchPanel';
import {getCardsTC} from '../../redux/actions';
import { connect } from 'react-redux';
import dataAPI from '../../services/DataAPI';

const SearchPanelContainer = (props) => {
  const [inputs, setInputs] = useState({
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
  });

  const set = {
    name: (e) => {
      setInputs({...inputs, name: e.target.value});
      dataAPI.beerName = e.target.value;
    },
    yeast: (e) => {
      setInputs({...inputs, yeast: e.target.value});
      dataAPI.yeast = e.target.value;
    },
    food: (e) => {
      setInputs({...inputs, food: e.target.value});
      dataAPI.food = e.target.value;
    },
    malt: (e) => {
      setInputs({...inputs, malt: e.target.value});
      dataAPI.malt = e.target.value;
    },
    hops: (e) => {
      setInputs({...inputs, hops: e.target.value});
      dataAPI.hops = e.target.value;
    },
    minABV: (e) => {
      setInputs({...inputs, minABV: e.target.value});
      dataAPI.minABV = e.target.value;
    },
    maxABV: (e) => {
      setInputs({...inputs, maxABV: e.target.value});
      dataAPI.maxABV = e.target.value;
    },
    minIBU: (e) => {
      setInputs({...inputs, minIBU: e.target.value});
      dataAPI.minIBU = e.target.value;
    },
    maxIBU: (e) => {
      setInputs({...inputs, maxIBU: e.target.value});
      dataAPI.maxIBU = e.target.value;
    },
    minEBC: (e) => {
      setInputs({...inputs, minEBC: e.target.value});
      dataAPI.minEBC = e.target.value;
    },
    maxEBC: (e) => {
      setInputs({...inputs, maxEBC: e.target.value});
      dataAPI.maxEBC = e.target.value;
    },
    from: (e) => {
      setInputs({...inputs, from: e.target.value});
      dataAPI.periodFrom = e.target.value;
    },
    to: (e) => {
      setInputs({...inputs, to: e.target.value});
      dataAPI.periodTo = e.target.value;
    }
  }

  const startSearch = () => {
    props.getCardsTC()
  }

  return (
    <SearchPanel inputs={inputs} set={set} startSearch={startSearch} />
  )
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {getCardsTC})(SearchPanelContainer)