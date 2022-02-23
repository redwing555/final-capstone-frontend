import axios from 'axios';

const LOAD_CARS = 'redux-load-cars';
const API_URL = 'http://localhost:5000/';
const END_POINT = 'cars';

const initialState = [];

export const loadCars = () => async (dispatch) => {
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  const response = await axios.get(API_URL + END_POINT);
  const { data } = response;
  const payload = data;
  dispatch({
    type: LOAD_CARS,
    payload,
  });
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARS:
      return action.payload;
    default:
      return state;
  }
};

export default carsReducer;
