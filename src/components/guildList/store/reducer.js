import {
	SELECT_ACTIVE_GUILD,
} from './types'

const initialState = {
	selectedGuildId: 0,
}

export default (state = initialState, action) => {
	switch (action.type) {
	case SELECT_ACTIVE_GUILD: {
		return {
			...state,
			selectedGuildId: action.selectedGuildId,
		}
	}

	default:
		return state
	}
}
