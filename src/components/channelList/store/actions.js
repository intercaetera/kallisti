import {
	GET_GUILD_CHANNELS,
	GET_GUILD_CHANNELS_SUCCESS,
	GET_GUILD_CHANNELS_FAILURE,
} from './types'

import {
	getGuildChannels as getGuildChannelsApi,
} from './api'

export const getGuildChannels = guildId => async dispatch => {
	dispatch({
		type: GET_GUILD_CHANNELS,
	})

	try {
		const channels = await getGuildChannelsApi(guildId)

		return dispatch({
			type: GET_GUILD_CHANNELS_SUCCESS,
			channels,
		})
	} catch (error) {
		return dispatch({
			type: GET_GUILD_CHANNELS_FAILURE,
		})
	}
}
