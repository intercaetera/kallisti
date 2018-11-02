import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class MessagesView extends PureComponent {
	render() {
		return (
			<box
				width="60%"
				height="90%"
				left="20%"
				border={{ type: 'line' }}
				style={{
					selected: { fg: 'blue' },
					border: { fg: 'blue' },
				}}
				ref={ref => this.messagesView = ref}
			>
				Messages view!
			</box>
		)
	}
}

export default MessagesView
