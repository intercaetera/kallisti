import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getGuildChannels } from './store/actions'
import { selectedGuildSelector, selectedGuildIdSelector } from '../guildList/store/selectors'
import { selectedGuildChannelsSelector } from './store/selectors'

class ChannelList extends PureComponent {
	static propTypes = {
		selectedGuildId: PropTypes.number.isRequired,
		getGuildChannels: PropTypes.func.isRequired,
	}

	componentDidUpdate(prevProps) {
		const {
			selectedGuild,
			selectedGuildId,
			getGuildChannels,
		} = this.props

		const { selectedGuildId: prevSelectedGuildId } = prevProps

		if (selectedGuildId !== prevSelectedGuildId) {
			getGuildChannels(selectedGuild.id)
		}
	}

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
				items={this.props.channels || []}
				ref={ref => this.channelList = ref}
			/>
		)
	}
}

function mapStateToProps(state) {
	return {
		channels: selectedGuildChannelsSelector(state),
		selectedGuildId: selectedGuildIdSelector(state),
		selectedGuild: selectedGuildSelector(state),
	}
}

const mapDispatchToProps = {
	getGuildChannels,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList)
