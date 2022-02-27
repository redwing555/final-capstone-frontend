import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import userReducer from './user/user';
import carsReducer from './cars/cars';
import reservationsReducer from './reservations/reservationsReducer';

const reducer = combineReducers({
  userReducer,
  carsReducer,
  reservationsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
