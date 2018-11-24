import {
	CHANGE_FOCUS,
} from './types'

import { GUILD_LIST } from '../types/elementTypes'

const initialState = {
	focusedElement: GUILD_LIST,
}

export default (state = initialState, action) => {
	switch (action.type) {
	case CHANGE_FOCUS: {
		return {
			...state,
			focusedElement: action.element,
		}
	}
	default:
		return state
	}
}
