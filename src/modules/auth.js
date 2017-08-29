import { GET, POST } from "../lib/requests";

//Actions
const LOGIN = "auth/LOGIN";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
const LOGIN_FAIL = "auth/LOGIN_FAIL";
const LOGOUT = "auth/LOGOUT";
const LOGOUT_SUCCESS = "auth/LOGOUT_SUCCESS";
const LOADING = "auth/LOADING";
const LOADING_SUCCESS = "auth/LOADING_SUCCESS";
const LOADING_FAIL = "auth/LOADING_FAIL";
const SIGNUP = "auth/SIGNUP";
const SIGNUP_SUCCESS = "auth/SIGNUP_SUCCESS";
const SIGNUP_FAIL = "auth/SIGNUP_FAIL";

const initialState = {
  loading: false,
  logginIn: false,
  logginOut: false,
  signingUp: false,
  signUpError: null,
  loginError: null,
  loadError: null,
  user: null
};

//Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        signingUp: true,
        signUpError: null
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: false,
        signUpError: null
      };

    case SIGNUP_FAIL:
      return {
        ...state,
        signingUp: false,
        signUpError: action.result
      };

    case LOADING:
      return {
        ...state,
        loading: true,
        loadError: null
      };

    case LOADING_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.result,
        loadError: null
      };

    case LOADING_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
        loadError: action.result
      };

    case LOGIN:
      return {
        ...state,
        logginIn: true,
        loginError: null
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        logginIn: false,
        user: action.result,
        loginError: null
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

export const login = data => {
  return async dispatch => {
    dispatch(logginIn());
    try {
      const result = await POST("users/auth", data);
      if (result.success) {
        dispatch(logginSuccess(result.data.user));
        localStorage.setItem("token", result.data.token);
      } else {
        dispatch(logginError(result));
        localStorage.setItem("token", "");
      }
    } catch (e) {
      dispatch(logginError(e));
      localStorage.setItem("token", "");
    }
  };
};

const logginOut = () => ({
  type: LOGOUT
});

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});

export const logout = data => {
  return dispatch => {
    dispatch(logginOut());
    dispatch(logoutSuccess());
    localStorage.setItem("token", "");
  };
};

const loading = () => ({
  type: LOADING
});

const loadingSuccess = user => ({
  type: LOADING_SUCCESS,
  result: user
});

const loadingFail = error => ({
  type: LOADING_FAIL,
  result: error
});

export const loadUser = () => {
  return async dispatch => {
    dispatch(loading());
    try {
      const result = await GET("users/me");
      if (result.success) {
        dispatch(loadingSuccess(result.data));
      } else {
        dispatch(loadingFail(result));
        localStorage.setItem("token", "");
      }
    } catch (e) {
      dispatch(loadingFail(e));
      localStorage.setItem("token", "");
    }
  };
};

const signingUp = () => ({
  type: SIGNUP
});

const signingUpSuccess = () => ({
  type: SIGNUP_SUCCESS
});

const signingUpFail = error => ({
  type: SIGNUP_FAIL,
  result: error
});

export const signUp = user => {
  return async dispatch => {
    dispatch(signingUp());
    try {
      const result = await POST("users", user);
      if (result.success) {
        dispatch(signingUpSuccess());
      } else {
        dispatch(signingUpFail(result));
      }
    } catch (e) {
      dispatch(signingUpFail(e));
    }
  };
};
