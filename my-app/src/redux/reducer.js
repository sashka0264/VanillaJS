/* eslint-disable one-var */
import {
  SET_CARDS_STATUS,
  SET_LIST_OF_CARDS,
  SET_USE_PAGE,
  SET_PAGES,
  SET_BASKET_STATUS,
  ADD_BASKET_PRODUCT,
  REMOVE_BASKET_PRODUCT,
  LOGIN,
  LOGOUT,
} from './actions';


const initialState = {
  login: {
    status: localStorage['beers-login'] ? JSON.parse(localStorage['beers-login']).status : false,
    name: localStorage['beers-login'] ? JSON.parse(localStorage['beers-login']).name : null,
  },
  cards: {
    spinner: false,
    listOfCards: null,
  },
  pages: {
    usePage: null,
    pagesList: null,
  },
  basket: {
    basketStatus: localStorage['basket-status'] ? JSON.parse(localStorage['basket-status']) : false,
    basketList: localStorage['beers-basket'] ? JSON.parse(localStorage['beers-basket']) : [],
  },
};

const reducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        login: {
          ...state.login,
          status: false,
          name: null,
        },
      };
    case LOGIN:
      return {
        ...state,
        login: {
          ...state.login,
          status: true,
          name: action.name,
        },
      };
    case REMOVE_BASKET_PRODUCT:
      return {
        ...state,
        basket: {
          ...state.basket,
          basketList: state.basket.basketList.filter((item) => item.id !== action.id),
        },
      };
    case ADD_BASKET_PRODUCT:
      return {
        ...state,
        basket: {
          ...state.basket,
          basketList: [
            ...state.basket.basketList,
            action.product,
          ],
        },
      };
    case SET_BASKET_STATUS:
      return {
        ...state,
        basket: {
          ...state.basket,
          basketStatus: action.status,
        },
      };
    case SET_PAGES:
      return {
        ...state,
        pages: {
          ...state.pages,
          pagesList: action.pagesList,
        },
      };
    case SET_USE_PAGE:
      return {
        ...state,
        pages: {
          ...state.pages,
          usePage: action.usePage,
        },
      };
    case SET_LIST_OF_CARDS:
      return {
        ...state,
        cards: {
          ...state.cards,
          listOfCards: action.list,
        },
      };
    case SET_CARDS_STATUS:
      return {
        ...state,
        cards: {
          ...state.cards,
          spinner: action.status,
        },
      };
    default:
      return state;
  }
};

export default reducer;
