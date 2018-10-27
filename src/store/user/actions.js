import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './types';

export const fetchUser = () => async dispatch => {
  dispatch({
    type: FETCH_USER,
  });


};
