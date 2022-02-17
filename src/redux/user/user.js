const ADD_USER = 'redux-add-user';

const initialState = '';

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
