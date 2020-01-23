
import dataAPI from '../services/DataAPI';

export const SET_CARDS_STATUS = 'SET-CARDS-STATUS',
  SET_LIST_OF_CARDS = 'SET-LIST-OF-CARDS',
  SET_USE_PAGE = 'SET-USE-PAGE',
  SET_PAGES = 'SET-PAGES',

  setUsePageAC = (usePage) => ({type: SET_USE_PAGE, usePage}),
  setPagesAC = (pagesList) => ({type: SET_PAGES, pagesList}),
  setCardsStatusAC = (status) => ({ type: SET_CARDS_STATUS, status }),
  setListOfCardsAC = (list) => ({ type: SET_LIST_OF_CARDS, list }),

  initializePagesTC = (pages) => async (dispatch) => {
    const usePage = dataAPI.usePage;
    dispatch(setUsePageAC(usePage));
    dispatch(setPagesAC(pages));
  },
  setUsePageTC = (usePage) => async (dispatch) => {
    dataAPI.usePage = usePage;
    dispatch(setUsePageAC(usePage));
  },
  getCardsTC = () => async (dispatch) => {
    dispatch(setCardsStatusAC(true));
    const data = await dataAPI.getData();
    setTimeout(() => {
      dispatch(setCardsStatusAC(false));
    }, 1000);
    dispatch(setListOfCardsAC(data));
  };
