import request from '../../../helpers/request'

export const getGuildChannels = guildId => request({
	url: `guilds/${guildId}/channels`,
})
