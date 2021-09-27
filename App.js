import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Router from './src/Router';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Router />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
