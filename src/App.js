import React, { PureComponent } from 'react'

import GuildList from './components/guildList/guildList.component'
import ChannelList from './components/channelList/channelList.component'
import MessagesView from './components/messagesView/messagesView.component'
import MessageInput from './components/messageInput/messageInput.component'
import UserList from './components/userList/userList.component'

class App extends PureComponent {
	render() {
		return (
			<>
				<GuildList />
				<ChannelList />
				<MessagesView />
				<MessageInput />
				<UserList />
			</>
		)
	}
}

export default App
