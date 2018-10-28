import request from '../../helpers/request';

export const getCurrentUser = () => request('user/@me');
export const getCurrentUserGuilds = () => request('user/@me/guilds');
