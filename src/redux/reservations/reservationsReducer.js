import axios from 'axios';

const GET_RESERVATIONS = 'reservations/GET_RESERVATIONS';
const DELETE_RESERVATION = 'reservations/DELETE_RESERVATIONS';
const initialState = [];

// const getAllReservations = (payload) => ({
//   type: GET_RESERVATIONS,
//   payload,
// });

export const cancelReservation = (payload) => ({
  type: DELETE_RESERVATION,
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

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.payload;
    case DELETE_RESERVATION:
      return state.filter((reservation) => reservation.id !== action.payload.id);
    default:
      return state;
  }
};

export default reservationsReducer;
