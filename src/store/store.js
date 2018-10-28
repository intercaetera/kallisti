import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import user from './user/reducer';

export default createStore(combineReducers({
  user,
}), applyMiddleware(thunk));
