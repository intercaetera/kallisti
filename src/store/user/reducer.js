import {
	GET_CURRENT_USER,
	GET_CURRENT_USER_SUCCESS,
	GET_CURRENT_USER_FAILURE,
} from './types'

const initialState = {
	currentUser: {},
}

export default (state = initialState, action) => {
	switch (action.type) {
	case GET_CURRENT_USER_SUCCESS: {
		return {
			...state,
			currentUser: action.user,
		}
	}
	default:
		return state
	}
}
