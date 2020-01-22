/* eslint-disable one-var */
import {
  SET_CARDS_STATUS,
  SET_LIST_OF_CARDS,
} from './actions';

const initialState = {
  cards: {
    spinner: false,
    listOfCards: null,
  },
};

const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
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
