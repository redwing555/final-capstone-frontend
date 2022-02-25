const GET_RESERVATIONS = 'reservations/GET_RESERVATIONS';
const DELETE_RESERVATION = 'reservations/DELETE_RESERVATIONS';
const initialState = {};

const getAllReservations = (payload) => ({
  type: GET_RESERVATIONS,
  payload,
});

export const cancelReservation = (payload) => ({
  type: DELETE_RESERVATION,
  payload,
});

export const deleteReservation = (id) => async (dispatch) => {
  await fetch(`http://localhost:5000/reservations/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch(cancelReservation(id));
};

export const getReservations = () => async (dispatch) => {
  const request = await fetch('http://localhost:5000/reservations');
  const data = await request.json();
  dispatch(getAllReservations(data));
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
