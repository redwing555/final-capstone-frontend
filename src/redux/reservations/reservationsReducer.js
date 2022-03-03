import axios from 'axios';

const GET_RESERVATIONS = 'reservations/GET_RESERVATIONS';
const DELETE_RESERVATION = 'reservations/DELETE_RESERVATIONS';
const ADD_RESERVATION = 'reservation/ADD_RESERVATION';
const API_URL = 'https://afternoon-harbor-85228.herokuapp.com/';
const END_POINT = 'api/v1/reservations';

const initialState = [];

export const cancelReservation = (payload) => ({
  type: DELETE_RESERVATION,
  payload,
});

const createNewReservation = (payload) => ({
  type: ADD_RESERVATION,
  payload,
});

export const deleteReservation = (id) => async (dispatch) => {
  await fetch(`http://localhost:3000//api/v1/reservations/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch(cancelReservation(id));
};

export const getReservations = (user) => async (dispatch) => {
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  const { data } = await axios.get('http://localhost:3000//api/v1/reservations', { params: { username: user } });
  dispatch({
    type: GET_RESERVATIONS,
    payload: data,
  });
};

export const createReservation = (payload, user) => async (dispatch) => {
  const request = await fetch(`${API_URL + END_POINT}?username=${user}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await request.json();
  dispatch(createNewReservation(data));
};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.payload;
    case DELETE_RESERVATION:
      return state.filter((reservation) => reservation.id !== action.payload.id);
    case ADD_RESERVATION:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reservationsReducer;
