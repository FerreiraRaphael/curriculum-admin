//Actions

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'auth/LOGIN_FAIL';
const LOGOUT = 'auth/LOGOUT';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'auth/LOGOUT_FAIL';

const initialState = {
  logginIn: false,
  logginOut: false,
  loginError: null,
  logoutError: null,
  user: null
};

//Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logginIn: false
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        logginIn: false,
        user: action.result
      };

    case LOGIN_FAIL:
      return {
        ...state,
        logginIn: false,
        user: null,
        loginError: action.result
      };

    case LOGOUT:
      return {
        ...state,
        logginOut: true
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        logginOut: false,
        user: null
      };

    case LOGOUT_FAIL:
      return {
        ...state,
        logginOut: false,
        logoutError: action.result
      };

    default:
      return state;
  }
};

//Action Creators
const logginIn = () => ({
  type: LOGIN
});

const logginSuccess = user => ({
  type: LOGIN_SUCCESS,
  result: user
});

const logginError = error => ({
  type: LOGIN_FAIL,
  result: error
});

export const login = async () => {
  return dispatch => {
    dispatch(logginIn());
    try {
    } catch (e) {}
  };
};
