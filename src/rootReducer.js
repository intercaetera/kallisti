import { combineReducers } from 'redux'

import userReducer from './shared/user/reducer'

const rootReducer = combineReducers({
	currentUser: userReducer,
})

export default rootReducer
