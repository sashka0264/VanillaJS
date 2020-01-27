/* eslint-disable one-var */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pages from './Pages/Pages';
import dataAPI from '../../services/DataAPI';
import { initializePagesTC, setUsePageTC } from '../../redux/actions';
import {Redirect} from "react-router-dom";

interface IProps {
  usePage: number,
  pagesList: Array<number>,
  initializePagesTC: any,
  setUsePageTC: any,
  basketStatus: boolean,
}

class PagesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

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

  componentDidUpdate(prevProps) {
    const {basketStatus, setUsePageTC} = this.props as IProps;
    const {redirect} = this.state as any;
    if (basketStatus !== prevProps.basketStatus) {
      setUsePageTC(1);
      this.setState({redirect: true});
    } else if (basketStatus === prevProps.basketStatus && redirect) {
      this.setState({redirect: false});
    }
  }

  render() {
    const {usePage, pagesList, setUsePageTC}: IProps = this.props as IProps;
    const {redirect} = this.state as any;
    if (redirect) {

      return <Redirect to='/1'/>
    }
    console.log(pagesList)
    return (
      <>
        <Pages usePage={usePage} pages={pagesList} setUsePageTC={setUsePageTC}/>
      </>
    )
  }
}

const mapStateToProps = ({ main: { pages: { usePage, pagesList }, basket: {basketStatus} } }) => ({
  usePage,
  pagesList,
  basketStatus,
});

export default connect(mapStateToProps, {initializePagesTC, setUsePageTC})(PagesContainer)