import React, { PureComponent } from 'react';

import { getCurrentUser } from '../../store/user/actions';
import { connect } from 'react-redux';

class GuildList extends PureComponent {
  componentDidMount() {
    this.guildList.focus();
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
        items={['there', 'will', 'be', 'a', 'list', 'of guilds', 'here']}
        ref={ref => this.guildList = ref}
      />
    );
  }
}

function mapStateToProps(state) {
  const { currentUser } = state;

  return {
    currentUser,
  };
}

const mapDispatchToProps = {
  getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(GuildList);
