import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Platform
} from 'react-native';


export default class HomeView extends Component {
  state = {
    artists: null
  }

  componentDidMount() {
    
  }

  render() {

    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
          Welcome to Joyeria Valery!
        </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: Platform.select({
      ios: 30,
      android: 10
    }),
  },
});