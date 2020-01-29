/* eslint-disable one-var */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as form } from 'redux-form';
import login from './reducers/loginReducer';
import basket from './reducers/basketReducer';
import pages from './reducers/pagesReducer';
import cards from './reducers/cardsReducer';

const reducers = combineReducers({
  pages,
  form,
  login,
  basket,
  cards,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;
