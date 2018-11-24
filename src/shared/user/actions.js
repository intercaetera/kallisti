import {
	GET_CURRENT_USER,
	GET_CURRENT_USER_SUCCESS,
	GET_CURRENT_USER_FAILURE,
	GET_CURRENT_USER_GUILDS,
	GET_CURRENT_USER_GUILDS_SUCCESS,
	GET_CURRENT_USER_GUILDS_FAILURE,
} from './types'

import {
	getCurrentUser as getCurrentUserApi,
	getCurrentUserGuilds as getCurrentUserGuildsApi,
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

export const getCurrentUserGuilds = () => async dispatch => {
	dispatch({
		type: GET_CURRENT_USER_GUILDS,
	})

	try {
		const guilds = await getCurrentUserGuildsApi()

		return dispatch({
			type: GET_CURRENT_USER_GUILDS_SUCCESS,
			guilds,
		})
	} catch (error) {
		return dispatch({
			type: GET_CURRENT_USER_GUILDS_FAILURE,
		})
	}
}
