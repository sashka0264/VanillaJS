/* eslint-disable no-underscore-dangle */
/* eslint-disable one-var */
import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// const store = createStore(
//   reducers,
//   applyMiddleware(thunkMiddleware),
// );
// если без redux-dev-tools

export default store;
