import {
	GET_GUILD_CHANNELS,
	GET_GUILD_CHANNELS_SUCCESS,
	GET_GUILD_CHANNELS_FAILURE,
} from './types'

import channelTypes from '../../../types/channelTypes'

const initialState = {
	selectedGuildChannelsLoading: false,
	selectedGuildChannels: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
	case GET_GUILD_CHANNELS: {
		return {
			...state,
			selectedGuildChannelsLoading: true,
		}
	}

	case GET_GUILD_CHANNELS_SUCCESS: {
		return {
			...state,
			selectedGuildChannelsLoading: false,
			selectedGuildChannels: action.channels
				.filter(channel => channel.type === channelTypes.GUILD_TEXT)
				.sort((a, b) => a.position > b.position ? 1 : -1),
		}
	}

	case GET_GUILD_CHANNELS_FAILURE: {
		return {
			...state,
			selectedGuildChannelsLoading: false,
		}
	}

	default:
		return state
	}
}
