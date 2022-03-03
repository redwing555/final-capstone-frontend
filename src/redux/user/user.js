const ADD_USER = 'redux-add-user';

const initialState = localStorage.getItem('username');

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      localStorage.setItem('username', action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
