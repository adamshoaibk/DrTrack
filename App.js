import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Router from './src/Router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/Redux/Reducers';
import thunk from 'redux-thunk';
import storage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const configureStore = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(configureStore);

class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={styles.container}>
            <Router />
          </SafeAreaView>
        </PersistGate>
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
