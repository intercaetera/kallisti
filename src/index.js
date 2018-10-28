import dotenv from 'dotenv'
import React, { Component } from 'react'
import blessed from 'blessed'
import { render } from 'react-blessed'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './App'

dotenv.config()

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
