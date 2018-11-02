import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class UserList extends PureComponent {
	render() {
		return (
			<list
				width="20%"
				right="0"
				border={{ type: 'line' }}
				keys
				mouse
				style={{
					selected: { fg: 'blue' },
					border: { fg: 'blue' },
				}}
				items={['list', 'of', 'users']}
				ref={ref => this.channelList = ref}
			/>
		)
	}
}

export default UserList
