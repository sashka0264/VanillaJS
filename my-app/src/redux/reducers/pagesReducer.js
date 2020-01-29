/* eslint-disable one-var */

import dataAPI from '../../services/DataAPI';

export const SET_USE_PAGE = 'SET-USE-PAGE',
  SET_PAGES = 'SET-PAGES',

  setUsePageAC = (usePage) => ({ type: SET_USE_PAGE, usePage }),
  setPagesAC = (pagesList) => ({ type: SET_PAGES, pagesList }),

  initializePagesTC = () => (dispatch) => {
    const pages = [],
      { usePage } = dataAPI;

    for (let i = 1; i <= dataAPI.pages; i += 1) {
      pages.push(i);
    }

    dispatch(setUsePageAC(usePage));
    dispatch(setPagesAC(pages));
  },
  setUsePageTC = (usePage) => (dispatch) => {
    dataAPI.usePage = usePage;
    dispatch(setUsePageAC(usePage));
  };

const initialState = {
  usePage: null,
  pagesList: null,
};

const pagesReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case SET_PAGES:
      return {
        ...state,
        pagesList: action.pagesList,
      };
    case SET_USE_PAGE:
      return {
        ...state,
        usePage: action.usePage,
      };
    default:
      return state;
  }
};

export default pagesReducer;
