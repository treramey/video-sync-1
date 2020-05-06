const initialState = {
  user: {},
  thread: [],
  message: "",
};

const GET_USER = "GET_USER";
const CLEAR_USER = "CLEAR_USER";
const UPDATE_USER = "UPDATE_USER";
const UPDATE_THREAD = "UPDATE_THREAD";
const ADD_MESSAGE = "ADD_MESSAGE";

export function addMessage(string) {
  return {
    type: ADD_MESSAGE,
    payload: string,
  };
}

//user is an obj
export function getUser(user) {
  return {
    type: GET_USER,
    payload: user,
  };
}

//thread is an array
export function updateThread(thread) {
  return {
    type: UPDATE_THREAD,
    payload: thread,
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

    case UPDATE_THREAD:
      return { ...state, thread: payload };

    case ADD_MESSAGE:
      return { ...state, message: payload };

    default:
      return state;
  }
}
