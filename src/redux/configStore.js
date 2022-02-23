import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import userReducer from './user/user';
import carsReducer from './cars/cars';

const reducer = combineReducers({
  userReducer,
  carsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
