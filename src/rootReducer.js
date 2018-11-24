import { combineReducers } from 'redux'

import userReducer from './shared/user/reducer'
import selectedGuildReducer from './components/guildList/store/reducer'
import channelReducer from './components/channelList/store/reducer'
import sharedReducer from './shared/reducer'

const rootReducer = combineReducers({
	currentUser: userReducer,
	selectedGuild: selectedGuildReducer,
	channel: channelReducer,
	shared: sharedReducer,
})

export default rootReducer
