import dotenv from 'dotenv'
import React, { Component } from 'react'
import blessed from 'blessed'
import { render } from 'react-blessed'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import App from './App'
import rootReducer from './rootReducer'

dotenv.config()

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
)

class Renderer extends Component {
	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		)
	}
}

// Creating our screen
const screen = blessed.screen({
	autoPadding: true,
	smartCSR: true,
	title: 'Blesscord',
})

// Adding a way to quit the program
screen.key(['C-q'], () => process.exit(0))

render(<Renderer />, screen)
