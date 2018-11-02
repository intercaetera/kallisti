import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class ChannelList extends PureComponent {
	render() {
		return (
			<list
				width="20%"
				height="50%"
				bottom="0"
				border={{ type: 'line' }}
				keys
				mouse
				style={{
					selected: { fg: 'blue' },
					border: { fg: 'blue' },
				}}
				items={['list', 'of', 'channels']}
				ref={ref => this.channelList = ref}
			/>
		)
	}
}

export default ChannelList
