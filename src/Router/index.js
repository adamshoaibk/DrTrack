import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../Pages/Dashboard';
import Profile from '../Pages/Profile';
import AddDiabeticInfo from '../Pages/AddDiabeticInfo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

class Router extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'DASHBOARD') {
                iconName = 'bar-chart-outline';
              } else if (route.name === 'ADD DETAILS') {
                iconName = 'add-circle-outline';
              } else if (route.name === 'PROFILE') {
                iconName = 'person-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="DASHBOARD" component={Dashboard} />
          <Tab.Screen name="ADD DETAILS" component={AddDiabeticInfo} />
          <Tab.Screen name="PROFILE" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Router;
