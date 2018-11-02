import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class MessageInput extends PureComponent {
	render() {
		return (
			<textbox
				width="60%"
				height="10%"
				left="20%"
				bottom="0"
				mouse
				keys
				inputOnFocus
				border={{ type: 'line' }}
				style={{
					selected: { fg: 'blue' },
					border: { fg: 'blue' },
				}}
				ref={ref => this.messageInput = ref}
				// onSubmit={this.handleSubmit}
			/>
		)
	}
}

export default MessageInput
