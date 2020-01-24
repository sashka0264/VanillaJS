
import dataAPI from '../services/DataAPI';
import basket from '../services/Basket';

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
  getCardsTC = (basketStatus) => async (dispatch) => {
    dispatch(setCardsStatusAC(true));
    let data;
    if (basketStatus) {
      const transform = basket.checklist.map((item) => item.id).join('|');
      data = await dataAPI.getBasketData(transform);
    } else {
      data = await dataAPI.getData();
    }
    console.log("DATA", data)
    setTimeout(() => {
      dispatch(setCardsStatusAC(false));
    }, 1000);
    dispatch(setListOfCardsAC(data));
  };
