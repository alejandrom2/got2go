import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginTabNavigator from './LoginTabNavigator';
import LoginScreen from '../screens/LoginScreen';

export default createSwitchNavigator({
  Login: LoginTabNavigator,
  Main: MainTabNavigator,
  LoginScr: LoginScreen,
},
{
  initialRouteName: 'Login',
}
);