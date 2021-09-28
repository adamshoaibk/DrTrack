import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Router from './src/Router';
import configureStore from './src/Redux/Reducers';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <SafeAreaView style={styles.container}>
          <Router />
        </SafeAreaView>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
