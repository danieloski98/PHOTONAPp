import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Profile from './Profile';
import Home from './Home';
import Places from './Places';
import Message from './Messages';

const BottomTab = createBottomTabNavigator();

function IconSwitch(props) {
  let iconColor;
  let iconSize;
  if (props.focused) {
    (iconColor = '#00a8ff'), (iconSize = 30);
  } else {
    (iconColor = 'grey'), (iconSize = 26);
  }
  return (
    <View>
      <Icon name={props.iconName} color={iconColor} size={iconSize} />
    </View>
  );
}

export default class Dasboard extends Component {
  render() {
    return (
      <BottomTab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          showLabel: false,
        }}>
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <IconSwitch focused={focused} iconName="home" />
            ),
          }}
        />
        <BottomTab.Screen
          name="Places"
          component={Places}
          options={{
            tabBarIcon: ({focused}) => (
              <IconSwitch iconName="compass" focused={focused} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <IconSwitch iconName="user" focused={focused} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Message"
          component={Message}
          options={{
            tabBarIcon: ({focused}) => (
              <IconSwitch iconName="mail" focused={focused} />
            ),
          }}
        />
        <BottomTab.Screen
          name="More"
          component={Message}
          options={{
            tabBarIcon: ({focused}) => (
              <IconSwitch iconName="more-horizontal" focused={focused} />
            ),
          }}
        />
      </BottomTab.Navigator>
    );
  }
}
