/* eslint-disable react/no-did-update-set-state */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-shadow */
/* eslint-disable one-var */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Pages from './Pages/Pages';
import { initializePagesTC, setUsePageTC } from '../../redux/reducers/pagesReducer';


interface IProps {
  usePage: number | null,
  pagesList: Array<number> | null,
  initializePagesTC: () => void,
  setUsePageTC: (x: number) => void,
  basketStatus: boolean
}

interface IState {
  redirect: boolean,
  paginatorView: number
}

class PagesContainer extends Component <IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      paginatorView: 1
    };
  }

  componentDidMount() {
    const { usePage, pagesList, initializePagesTC } = this.props;
    if (!usePage || !pagesList) initializePagesTC();
  }

  componentDidUpdate(prevProps) {
    const { basketStatus, setUsePageTC } = this.props;
    const { redirect } = this.state;
    if (basketStatus !== prevProps.basketStatus) {
      setUsePageTC(1);
      this.setState({ redirect: true, paginatorView: 1 });
    } else if (redirect) this.setState({ redirect: false });
  }

  onLeft = () => {
    const { paginatorView } = this.state;
    this.setState({ paginatorView: paginatorView - 1 });
  }

  onRight = () => {
    const { paginatorView } = this.state;
    this.setState({ paginatorView: paginatorView + 1 });
  }

  render() {
    const { usePage, pagesList } = this.props;
    const { redirect, paginatorView } = this.state;
    if (redirect) {
      return <Redirect to="/1" />;
    }
    return (
      <Pages
        onLeft={this.onLeft}
        onRight={this.onRight}
        paginatorView={paginatorView}
        usePage={usePage}
        pages={pagesList}
      />
    );
  }
}

const mapStateToProps = (
  { pages: { usePage, pagesList }, basket: { basketStatus } }
) => ({
  usePage,
  pagesList,
  basketStatus
});

export default connect(mapStateToProps, { initializePagesTC, setUsePageTC })(PagesContainer);
