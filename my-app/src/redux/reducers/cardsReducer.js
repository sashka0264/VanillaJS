/* eslint-disable one-var */
import dataAPI from '../../services/DataAPI';

export const SET_CARDS_STATUS = 'SET-CARDS-STATUS',
  SET_LIST_OF_CARDS = 'SET-LIST-OF-CARDS',

  setCardsStatusAC = (status) => ({
    type: SET_CARDS_STATUS,
    status
  }),
  setListOfCardsAC = (list) => ({
    type: SET_LIST_OF_CARDS,
    list
  }),

  getCardsTC = (basketStatus, basketList) => async (dispatch) => {
    dispatch(setCardsStatusAC(true));
    let data;
    try {
      if (basketStatus) {
        const transform = basketList.map((item) => item.id).join('|');
        data = await dataAPI.getBasketData(transform);
      } else {
        data = await dataAPI.getData();
      }
      dispatch(setListOfCardsAC(data));
      setTimeout(() => {
        dispatch(setCardsStatusAC(false));
      }, 1000);
    } catch (err) {
      console.error(`${err.message}. Пожалуйста, проверьте соединение и повторите попытку... `);
    }
  };

const initialState = {
  spinner: false,
  listOfCards: null
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_OF_CARDS:
      return {
        ...state,
        listOfCards: action.list
      };
    case SET_CARDS_STATUS:
      return {
        ...state,
        spinner: action.status
      };
    default:
      return state;
  }
};

export default cardsReducer;
