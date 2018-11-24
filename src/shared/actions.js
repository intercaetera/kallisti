import {
	CHANGE_FOCUS,
} from './types'

export const changeFocus = element => async dispatch => dispatch({
	type: CHANGE_FOCUS,
	element,
})
