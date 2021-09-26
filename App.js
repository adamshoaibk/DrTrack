/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from './src/Pages/Dashboard';
import AddDiabeticInfo from './src/Pages/AddDiabeticInfo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'DASHBOARD') {
                iconName = focused ? 'bar-chart-outline' : 'bar-chart-outline';
              } else if (route.name === 'ADD DETAILS') {
                iconName = focused
                  ? 'add-circle-outline'
                  : 'add-circle-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="DASHBOARD" component={Dashboard} />
          <Tab.Screen name="ADD DETAILS" component={AddDiabeticInfo} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
