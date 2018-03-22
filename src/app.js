
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Platform,
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux'

import HomeView from './HomeView'

class joyeria_valery extends React.Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="home" component={HomeView} hideNavBar />
      </Scene>
    </Router>
  }
}
AppRegistry.registerComponent('joyeria_valery', () => joyeria_valery);