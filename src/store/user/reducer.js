import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from './types';

const initialState = {
  currentUser: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
      };
    }
    default:
      return state;
  }
};
