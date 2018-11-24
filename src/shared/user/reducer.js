import {
	GET_CURRENT_USER,
	GET_CURRENT_USER_SUCCESS,
	GET_CURRENT_USER_FAILURE,
	GET_CURRENT_USER_GUILDS,
	GET_CURRENT_USER_GUILDS_SUCCESS,
	GET_CURRENT_USER_GUILDS_FAILURE,
} from './types'

const initialState = {
	userLoading: false,
	user: {},
	guildsLoading: false,
	guilds: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
	case GET_CURRENT_USER: {
		return {
			...state,
			userLoading: true,
		}
	}
	case GET_CURRENT_USER_SUCCESS: {
		return {
			...state,
			user: action.user,
			userLoading: false,
		}
	}
	case GET_CURRENT_USER_FAILURE: {
		return {
			...state,
			userLoading: false,
		}
	}

	case GET_CURRENT_USER_GUILDS: {
		return {
			...state,
			guildsLoading: true,
		}
	}
	case GET_CURRENT_USER_GUILDS_SUCCESS: {
		return {
			...state,
			guilds: action.guilds,
			guildsLoading: false,
		}
	}
	case GET_CURRENT_USER_GUILDS_FAILURE: {
		return {
			...state,
			guildsLoading: false,
		}
	}
	default:
		return state
	}
}
