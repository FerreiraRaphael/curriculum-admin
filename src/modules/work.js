import { GET, POST } from "../lib/requests";

//Actions
// const LOAD = "work/LOAD";
// const LOAD_SUCCESS = "work/LOAD_SUCCESS";
// const LOAD_FAIL = "work/LOAD_FAIL";
const LIST = "work/LIST";
const LIST_SUCCESS = "work/LIST_SUCCESS";
const LIST_FAIL = "work/LIST_FAIL";

const initialState = {
  //   selected: null,
  //   loading: false,
  //   loadingError: null,
  list: [],
  listing: false,
  listingError: null
};

//Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case LIST:
      return {
        ...state,
        listing: true
      };

    case LIST_SUCCESS:
      return {
        ...state,
        listing: false,
        list: action.result
      };

    case LIST_FAIL:
      return {
        ...state,
        listing: false,
        listingError: action.result
      };

    default:
      return state;
  }
};

//Action Creators
const listing = () => ({
  type: LIST
});

const listingSuccess = works => ({
  type: LIST_SUCCESS,
  result: works
});

const listingError = error => ({
  type: LIST_FAIL,
  result: error
});

export const listWorks = data => {
  return async dispatch => {
    dispatch(listing());
    try {
      const result = await GET("works", data);
      if (result.success) {
        dispatch(listingSuccess(result.data));
      } else {
        dispatch(listingError(result));
      }
    } catch (e) {
      dispatch(listingError(e));
    }
  };
};
