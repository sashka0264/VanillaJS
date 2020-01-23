/* eslint-disable one-var */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pages from './Pages/Pages';
import dataAPI from '../../services/DataAPI';
import { initializePagesTC, setUsePageTC } from '../../redux/actions';

interface IProps {
  usePage: number,
  pagesList: Array<number>,
  initializePagesTC: any,
  setUsePageTC: any,
}

class PagesContainer extends Component {
  componentDidMount() {
    const {usePage, pagesList, initializePagesTC}: IProps = this.props as IProps;
    if (usePage === null || pagesList === null) {
      const pages: number[] = [];
      
      for (let i: number = 1; i <= dataAPI.pages; i += 1) {
        pages.push(i);
      }
      initializePagesTC(pages);
    }
  }

  render() {
    const {usePage, pagesList, setUsePageTC}: IProps = this.props as IProps;
    return <Pages usePage={usePage} pages={pagesList} setUsePageTC={setUsePageTC}/>
  }
}

const mapStateToProps = ({ main: { pages: { usePage, pagesList } } }) => ({
  usePage,
  pagesList,
});

export default connect(mapStateToProps, {initializePagesTC, setUsePageTC})(PagesContainer);
