
import dataAPI from '../services/DataAPI';

export const SET_CARDS_STATUS = 'SET-CARDS-STATUS',
  SET_LIST_OF_CARDS = 'SET-LIST-OF-CARDS',
  SET_USE_PAGE = 'SET-USE-PAGE',
  SET_PAGES = 'SET-PAGES',
  SET_BASKET_STATUS = 'SET-BASKET-STATUS',
  ADD_BASKET_PRODUCT = 'ADD-BASKET-PRODUCT',
  REMOVE_BASKET_PRODUCT = 'REMOVE-BASKET-PRODUCT',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',

  setUsePageAC = (usePage) => ({ type: SET_USE_PAGE, usePage }),
  setPagesAC = (pagesList) => ({ type: SET_PAGES, pagesList }),
  setCardsStatusAC = (status) => ({ type: SET_CARDS_STATUS, status }),
  setListOfCardsAC = (list) => ({ type: SET_LIST_OF_CARDS, list }),
  setBasketStatusAC = (status) => ({ type: SET_BASKET_STATUS, status }),
  addBasketProductAC = (product) => ({ type: ADD_BASKET_PRODUCT, product }),
  removeBasketProductAC = (id) => ({ type: REMOVE_BASKET_PRODUCT, id }),
  loginAC = (name) => ({ type: LOGIN, name }),
  logOutAC = () => ({ type: LOGOUT }),

  logOutTC = () => (dispatch) => {
    localStorage.removeItem('beers-login');
    dispatch(logOutAC());
  },
  setBasketStatusTC = (newBasketStatus) => (dispatch) => {
    dispatch(setBasketStatusAC(newBasketStatus));
    localStorage.setItem('basket-status', JSON.stringify(newBasketStatus));
  },
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
  },
  getCardsTC = (basketStatus, basketList) => async (dispatch) => {
    dispatch(setCardsStatusAC(true));
    let data;
    if (basketStatus) {
      const transform = basketList.map((item) => item.id).join('|');
      data = await dataAPI.getBasketData(transform);
    } else {
      data = await dataAPI.getData();
    }
    setTimeout(() => {
      dispatch(setCardsStatusAC(false));
    }, 1000);
    dispatch(setListOfCardsAC(data));
  };
