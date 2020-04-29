const initialState = {
  user: {},
};

const GET_USER = "GET_USER";
const CLEAR_USER = "CLEAR_USER";
const UPDATE_USER = "UPDATE_USER";

//user is an obj
export function getUser(user) {
  return {
    type: GET_USER,
    payload: user,
  };
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user,
  };
}

export function clearUser() {
  return {
    type: CLEAR_USER,
    payload: {},
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return { ...state, user: payload };

    case CLEAR_USER:
      return { ...state, user: payload };

    case UPDATE_USER:
      return { ...state, user: payload };

    default:
      return state;
  }
}
