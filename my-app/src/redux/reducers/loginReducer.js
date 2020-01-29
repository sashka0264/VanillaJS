/* eslint-disable one-var */
export const LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',

  loginAC = (name) => ({
    type: LOGIN,
    name,
  }),
  logOutAC = () => ({
    type: LOGOUT,
  }),

  logOutTC = () => (dispatch) => {
    localStorage.removeItem('beers-login');
    dispatch(logOutAC());
  };

const initialState = {
  status: localStorage['beers-login'] ? JSON.parse(localStorage['beers-login']).status : false,
  name: localStorage['beers-login'] ? JSON.parse(localStorage['beers-login']).name : null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        status: false,
        name: null,
      };
    case LOGIN:
      return {
        ...state,
        status: true,
        name: action.name,
      };
    default:
      return state;
  }
};

export default loginReducer;
