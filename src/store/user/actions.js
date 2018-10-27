import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './types';

import { fetchCurrentUser as fetchCurrentUserApi } from './api';

export const fetchUser = () => async dispatch => {
  dispatch({
    type: FETCH_USER,
  });

  try {
    const user = await fetchCurrentUserApi();

    dispatch({
      type: FETCH_USER_SUCCESS,
      user,
    });
  } catch (error) {
    dispatch({
      type: FETCH_USER_FAILURE,
    });
  }
};
