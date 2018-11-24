import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { selectActiveGuild } from './store/actions'
import { getCurrentUserGuilds } from '../../shared/user/actions'
import { currentUserGuildsSelector } from '../../shared/user/selectors'
import { focusedElementSelector } from '../../shared/selectors'

import { GUILD_LIST, CHANNEL_LIST } from '../../types/elementTypes'
import { changeFocus } from '../../shared/actions'

class GuildList extends PureComponent {
	static propTypes = {
		getCurrentUserGuilds: PropTypes.func.isRequired,
		guilds: PropTypes.arrayOf(PropTypes.string).isRequired,
		focusedElement: PropTypes.string.isRequired,

		selectActiveGuild: PropTypes.func.isRequired,
		changeFocus: PropTypes.func.isRequired,
	}

	componentDidMount() {
		const { getCurrentUserGuilds } = this.props
		getCurrentUserGuilds()
	}

	componentDidUpdate() {
		const { guildList } = this
		const { focusedElement } = this.props

		if (focusedElement === GUILD_LIST) {
			guildList.focus()
		}
	}

	handleSelect = ({ index }) => {
		const { selectActiveGuild, changeFocus } = this.props
		selectActiveGuild(index - 1)
		changeFocus(CHANNEL_LIST)
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
		focusedElement: focusedElementSelector(state),
	}
}

const mapDispatchToProps = {
	getCurrentUserGuilds,
	selectActiveGuild,
	changeFocus,
}

export default connect(mapStateToProps, mapDispatchToProps)(GuildList)
