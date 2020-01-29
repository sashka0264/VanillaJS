import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import reducer from './reducer';

const reducers = combineReducers({ main: reducer, form: reduxFormReducer });
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

