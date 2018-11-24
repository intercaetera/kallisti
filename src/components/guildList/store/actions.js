import {
	SELECT_ACTIVE_GUILD,
} from './types'

export const selectActiveGuild = selectedGuildId => async dispatch => dispatch({
	type: SELECT_ACTIVE_GUILD,
	selectedGuildId,
})
