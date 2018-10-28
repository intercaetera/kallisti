import { GET_CURRENT_USER, GET_CURRENT_USER_SUCCESS, GET_CURRENT_USER_FAILURE } from './types'

import {
	getCurrentUser as getCurrentUserApi,
} from './api'

export const getCurrentUser = () => async dispatch => {
	dispatch({
		type: GET_CURRENT_USER,
	})

	try {
		const user = await getCurrentUserApi()

		return dispatch({
			type: GET_CURRENT_USER_SUCCESS,
			user,
		})
	} catch (error) {
		return dispatch({
			type: GET_CURRENT_USER_FAILURE,
		})
	}
}

