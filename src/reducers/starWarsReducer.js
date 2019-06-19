/* we need our action types here*/
import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE
} from "../actions";

const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  error: "",
  isFetching: false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
