import React, {Component} from 'react';
import Header from './src/components/uikit/header';

export default class App extends Component {
  state = {
    title: 'STAR GATE'
  }
  render() {
    return (
      <Header title={this.state.title} />
    )
  }
}

