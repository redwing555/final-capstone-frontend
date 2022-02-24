import axios from 'axios';

const LOAD_CARS = 'redux-load-cars';
const ADD_CAR = 'cars/ADD_CAR';
const DELETE_CAR = 'cars/DELETE_CAR';
const API_URL = 'http://localhost:3000/api/v1/';
const END_POINT = 'cars';

const initialState = [];

const createNewCar = (payload) => ({
  type: ADD_CAR,
  payload,
});

export const createCar = (payload) => async (dispatch) => {
  const request = await fetch(API_URL + END_POINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await request.json();
  dispatch(createNewCar(data));
};

export const deleteCar = (payload) => async (dispatch) => {
  await fetch(`${API_URL + END_POINT}/${payload.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch({
    type: DELETE_CAR,
    payload,
  });
};

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
    case ADD_CAR:
      return [...state, action.payload];
    case DELETE_CAR:
      return state.filter((car) => car.id !== Number(action.payload.id));
    default:
      return state;
  }
};

export default carsReducer;
