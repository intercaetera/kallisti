import {
  FETCH_CURRENT_USER,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_FAILURE,
} from './types';

const initialState = {
  username: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER: {
      return {
        ...state,
        username: action,
      };
    }
    default:
      return state;
  }
};
