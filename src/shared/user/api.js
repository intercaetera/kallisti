import request from '../../helpers/request'

export const getCurrentUser = () => request({ url: 'users/@me' })
export const getCurrentUserGuilds = () => request({ url: 'users/@me/guilds' })
