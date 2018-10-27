import dotenv from 'dotenv';
import React, { Component } from 'react';
import blessed from 'blessed';
import { render } from 'react-blessed';

dotenv.config();

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  render() {
    return (
      <box
        top="center"
        left="center"
        width="50%"
        height="50%"
        border={{ type: 'line' }}
        style={{ border: { fg: 'blue' } }}
      >
        {this.state.data}
      </box>
    );
  }
}

// Creating our screen
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'Blesscord',
});

// Adding a way to quit the program
screen.key(['C-q'], () => process.exit(0));

render(<App />, screen);
