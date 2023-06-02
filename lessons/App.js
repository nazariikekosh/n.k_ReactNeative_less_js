import React, {Component} from 'react';
import Header from './src/components/uikit/Header';
import {View} from 'react-native';

export default class App extends Component {
  state = {
    title: 'STAR GATE'
  }
  render() {
    return (
      <View>
        <Header title={this.state.title} />
      </View>
    )
  }
}

