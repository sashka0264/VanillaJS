/* eslint-disable one-var */
export const SET_BASKET_STATUS = 'SET-BASKET-STATUS',
  ADD_BASKET_PRODUCT = 'ADD-BASKET-PRODUCT',
  REMOVE_BASKET_PRODUCT = 'REMOVE-BASKET-PRODUCT',

  setBasketStatusAC = (status) => ({ type: SET_BASKET_STATUS, status }),
  addBasketProductAC = (product) => ({ type: ADD_BASKET_PRODUCT, product }),
  removeBasketProductAC = (id) => ({ type: REMOVE_BASKET_PRODUCT, id }),

  setBasketStatusTC = (newBasketStatus) => (dispatch) => {
    dispatch(setBasketStatusAC(newBasketStatus));
    localStorage.setItem('basket-status', JSON.stringify(newBasketStatus));
  };

const initialState = {
  basketStatus: localStorage['basket-status'] ? JSON.parse(localStorage['basket-status']) : false,
  basketList: localStorage['beers-basket'] ? JSON.parse(localStorage['beers-basket']) : [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_BASKET_PRODUCT:
      return {
        ...state,
        basketList: state.basketList.filter((item) => item.id !== action.id),
      };
    case ADD_BASKET_PRODUCT:
      return {
        ...state,
        basketList: [
          ...state.basketList,
          action.product,
        ],
      };
    case SET_BASKET_STATUS:
      return {
        ...state,
        basketStatus: action.status,
      };
    default:
      return state;
  }
};

export default basketReducer;
