import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getCurrentUserGuilds } from '../../shared/user/actions'
import { currentUserGuildsSelector } from '../../shared/user/selectors'

class GuildList extends PureComponent {
	static propTypes = {
		getCurrentUserGuilds: PropTypes.func.isRequired,
		guilds: PropTypes.arrayOf(PropTypes.string).isRequired,
	}

	componentDidMount() {
		const { guildList } = this
		const { getCurrentUserGuilds } = this.props

		guildList.focus()
		getCurrentUserGuilds()
	}

	render() {
		return (
			<list
				width="33%"
				border={{ type: 'line' }}
				keys
				mouse
				style={{
					selected: { fg: 'blue' },
					border: { fg: 'blue' },
				}}
				items={this.props.guilds || []}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(GuildList)
