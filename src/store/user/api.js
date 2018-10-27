import request from '../../helpers/request';

export const fetchCurrentUser = () => request('user/@me');
