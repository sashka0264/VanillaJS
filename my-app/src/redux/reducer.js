/* eslint-disable one-var */
import {
  SET_CARDS_STATUS,
  SET_LIST_OF_CARDS,
  SET_USE_PAGE,
  SET_PAGES,
} from './actions';

const initialState = {
  cards: {
    spinner: false,
    listOfCards: null,
  },
  pages: {
    usePage: null,
    pagesList: null,
  },
};

const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case SET_PAGES:
      return {
        ...state,
        pages: {
          ...state.pages,
          pagesList: action.pagesList,
        }
      }
    case SET_USE_PAGE:
      return {
        ...state,
        pages: {
          ...state.pages,
          usePage: action.usePage,
        }
      }
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
