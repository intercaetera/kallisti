import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { selectActiveGuild } from './store/actions'
import { getCurrentUserGuilds } from '../../shared/user/actions'
import { currentUserGuildsSelector } from '../../shared/user/selectors'

class GuildList extends PureComponent {
	static propTypes = {
		getCurrentUserGuilds: PropTypes.func.isRequired,
		selectActiveGuild: PropTypes.func.isRequired,
		guilds: PropTypes.arrayOf(PropTypes.string).isRequired,
	}

	componentDidMount() {
		const { guildList } = this
		const { getCurrentUserGuilds } = this.props

		guildList.focus()
		getCurrentUserGuilds()
	}

	handleSelect = ({ index }) => {
		const { selectActiveGuild } = this.props
		selectActiveGuild(index - 1)
	}

	render() {
		return (
			<list
				width="20%"
				height="50%"
				border={{ type: 'line' }}
				keys
				mouse
				style={{
					selected: { fg: 'blue' },
					border: { fg: 'blue' },
				}}
				items={this.props.guilds || []}
				onSelect={this.handleSelect}
				ref={ref => this.guildList = ref}
			/>
		)
	}
}

function mapStateToProps(state) {
	return {
		guilds: currentUserGuildsSelector(state),
	}
}

const mapDispatchToProps = {
	getCurrentUserGuilds,
	selectActiveGuild,
}

export default connect(mapStateToProps, mapDispatchToProps)(GuildList)
