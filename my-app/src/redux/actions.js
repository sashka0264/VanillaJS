
import dataAPI from '../services/DataAPI';

export const SET_CARDS_STATUS = 'SET-CARDS-STATUS',
  SET_LIST_OF_CARDS = 'SET_LIST_OF_CARDS',

  setCardsStatusAC = (status) => ({ type: SET_CARDS_STATUS, status }),
  setListOfCardsAC = (list) => ({ type: SET_LIST_OF_CARDS, list }),

  getCardsTC = () => async (dispatch) => {
    dispatch(setCardsStatusAC(true));
    const data = await dataAPI.getData();
    setTimeout(() => {
      dispatch(setCardsStatusAC(false));
    }, 1000);
    dispatch(setListOfCardsAC(data));
  };
