/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from './components/Onboarding';
import Signup from './components/Signup';
import Dashboard from './components/Dasboard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={LandingPage}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
