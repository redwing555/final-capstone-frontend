import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import userReducer from './user/user';
import carsReducer from './cars/cars';
import reservationsReducer from './reservations/reservationsReducer';

const reducer = combineReducers({
  userReducer,
  carsReducer,
  reservationsReducer,

});

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
export default store;
